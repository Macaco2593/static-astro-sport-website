import type { APIRoute } from "astro";
import type { Disciplina } from "../../types";
import { BASE_DISCIPLINAS } from "../../data/disciplinas";
import { getDisciplinasAssets } from "../../services/getDisciplinas";

// Caché en memoria para evitar llamar al backend en cada solicitud
const cache: { data: Disciplina[]; timestamp: number } = { data: [], timestamp: 0 };
const CACHE_DURATION = parseInt(import.meta.env.CACHE_TIME ?? "0");

export const GET: APIRoute = async () => {
  const now = Date.now();

  if (cache.data.length > 0 && now - cache.timestamp < CACHE_DURATION) {
    return new Response(JSON.stringify(cache.data));
  }

  // 1) Obtenemos SOLO imagen/pdf desde Strapi
  const assets = await getDisciplinasAssets();
  console.log({ assets });
  // 2) Mezclamos con la lista estática que vive en el frontend
  const data: Disciplina[] = BASE_DISCIPLINAS.map((base) => {
    const asset = assets.find((a) => a.slug === base.slug);
    return {
      slug: base.slug,
      titulo: base.titulo,
      descripcion: base.descripcion,
      imagenUrl: asset?.imagenUrl,
      pdfUrl: asset?.pdfUrl,
    };
  });

  cache.data = data;
  cache.timestamp = now;

  return new Response(JSON.stringify(data));
};
