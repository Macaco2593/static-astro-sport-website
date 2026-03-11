import { defineCollection, z }  from "astro:content";

const noticiasCollection = defineCollection({
    type: "content",
    schema: z.object({
        titulo: z.string(),
        resumen: z.string(),
        fecha: z.coerce.date(),
        imagen: z.string().optional(),
        linkExterno: z.string().optional(),
        categoria: z.enum(["Natación", "Aguas Abiertas", "Institucional", "Torneos", "Natación Artística", "Polo Acuático", "Clavado", "Máster"]),
        fotografo: z.string().optional(),
    }),
});

export const collections = {
    noticias: noticiasCollection,
};