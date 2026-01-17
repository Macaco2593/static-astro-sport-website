import type { DisciplinaAssets } from "../types";

// Servicio para obtener SOLO los assets (imagen + pdf) desde Strapi.
// La lista de disciplinas (nombres, descripciones) vive en el frontend.
export async function getDisciplinasAssets(): Promise<DisciplinaAssets[]> {
  try {
    const response = await fetch(
      `${import.meta.env.DOMINIO}/disciplinas?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.API_KEY}`,
        },
      }
    );

    const json = await response.json();
    const items = json?.data ?? [];

    

    return items.map((item: any) => {
      const attrs = item.attributes ?? item;

      const slug = attrs.slug as string | undefined;

      // imagen_destacada: { data: { attributes: { url } } }
      const imagenUrl: string | undefined = item?.imagen_destacada?.url;
      // descargas: componente reutilizable -> puede ser array o single
      const descargas = attrs.descargas;
      let pdfUrl: string | undefined;

      if (Array.isArray(descargas) && descargas.length > 0) {
        const first = descargas[0];
        const pdfAttr = first.archivo_pdf?.data?.attributes;
        pdfUrl = pdfAttr?.url;
      } else if (descargas && descargas.archivo_pdf) {
        const pdfAttr = descargas.archivo_pdf?.data?.attributes;
        pdfUrl = pdfAttr?.url;
      }

      return {
        slug,
        imagenUrl,
        pdfUrl,
      } as DisciplinaAssets;
    });
  } catch (error) {
    console.error("Error al obtener las disciplinas (assets):", error);
    return [];
  }
}