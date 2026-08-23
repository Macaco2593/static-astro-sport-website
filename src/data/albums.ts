import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${import.meta.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: import.meta.env.R2_ACCESS_KEY,
    secretAccessKey: import.meta.env.R2_SECRET_KEY,
  },
});

export interface Foto {
  src: string;
  alt?: string;
  ancho?: string;
}

export interface Album {
  id: string;
  titulo: string;
  fecha: string;
  ubicación: string;
  cover: string;
  descripcion: string;
  etiquetas: string[];
  fotos?: Foto[];
  linkExterno?: string;
}

export interface FotoInput {
  archivo: string;
  alt?: string;
  ancho?: string;
}

async function obtenerFotosDeR2(prefijoCarpeta: string): Promise<Foto[]> {
  const command = new ListObjectsV2Command({
    Bucket: "galeria-adadet",
    Prefix: prefijoCarpeta,
  });

  const response = await s3.send(command);
  const URL_PUBLICA = "https://pub-15b0928184294a4692cb0b949397344a.r2.dev";

  if (!response.Contents) return [];

  const fotosValidas = response.Contents.filter(
    (archivo) => archivo.Key && !archivo.Key.endsWith("/"),
  );

  // 3. EL SCRIPT ESPÍA: Imprimimos la cantidad exacta en la consola con colores básicos
  console.log(
    `\n[📸 LOG R2] ✅ Éxito: Se descargó la lista de ${fotosValidas.length} fotos para el estadal.`,
  );
  console.log(`[📸 LOG R2] 📂 Ruta escaneada: ${prefijoCarpeta}\n`);

  return (
    response.Contents
      // Filtramos para ignorar la carpeta en sí misma si viene en la lista
      .filter((archivo) => archivo.Key && !archivo.Key.endsWith("/"))
      .map((archivo) => {
        // Separamos la ruta por las barras, codificamos el nombre del archivo para que soporte espacios y lo volvemos a unir
        const partes = archivo.Key!.split("/");
        const nombreArchivo = encodeURIComponent(partes.pop()!);
        const rutaSegura = [...partes, nombreArchivo].join("/");

        return {
          src: `${URL_PUBLICA}/${rutaSegura}`,
        };
      })
  );
}

export const ALBUMES: Album[] = [
  {
    id: "II-estadal-2026",
    titulo: "II Competencia Estadal 2026",
    fecha: "Agosto 2026",
    ubicación: "San Cristóbal",
    cover:
      "https://pub-15b0928184294a4692cb0b949397344a.r2.dev/galeria/2026/08-estadal-sancristobal/_DSC0500.jpg",
    descripcion:
      "Jornada inaugural con la participación de más de 200 atletas infantiles.",
    etiquetas: ["Natación", "Competencia", "Federados"],
    // ¡Magia! Solo le pasas la ruta de la carpeta
    fotos: await obtenerFotosDeR2("galeria/2026/08-estadal-sancristobal/"),
  },
];
