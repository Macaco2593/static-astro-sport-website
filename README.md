# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
+---public
|   |   adadet-logo.jpg
|   |   favicon.svg
|   |
|   \---contenido
|       +---competencias_pdf
|       |   +---I-competencia-estadal-2026
|       |   |       condicion_general.pdf
|       |   |       mejores_atletas.pdf
|       |   |       resultados_individuales.pdf
|       |   |       resultados_por_equipo.pdf
|       |   |
|       |   \---I-competencia-regional-adaefalcon-2026
|       |           condicion_general.pdf
|       |
|       \---documentos
|               condiciones_generales_de_natacion_2026.pdf
|               condiciones_tecnicas_generales_de_aguas_abiertas_2026.pdf
|               condiciones_tecnicas_generales_de_clavados_2026.pdf
|               condiciones_tecnicas_generales_de_natacion_artistica.pdf
|               condiciones_tecnicas_generales_de_natacion_master_2026.pdf
|               condiciones_tecnicas_generales_de_polo_acuatico_2026.pdf
|               marcas-minimas-natacion-2026.pdf
|               normativa_de_fichaje_feveda_2026.pdf
|               Organigrama-de-la-asociacion.pdf
|
+---raw-data
|       resultados csv.csv
|
+---scripts
|       procesarRanking.ts
|
\---src
    +---assets
    |   |   1er-estadal-adadet-2026.jpeg
    |   |   1er-regional-adaefalcon-2026.jpeg
    |   |   adadet-logo.jpg
    |   |   aguas-abiertas.jpeg
    |   |   clavado.jpg
    |   |   competencia3.png
    |   |   idt-logo.png
    |   |   logoAdadet.svg
    |   |   master.jpg
    |   |   natacion-artistica.jpg
    |   |   natacion.jpg
    |   |   podio.jpg
    |   |   polo-acuatico.jpg
    |   |   pool-competition.jpg
    |   |   pool.jpg
    |   |
    |   +---albums
    |   |   \---1er-estadal-2025
    |   |           1.jpg
    |   |
    |   +---icons
    |   |       facebook.svg
    |   |       instagram.svg
    |   |
    |   \---noticias
    |           evaluacion_tecnica_natacion_artistica.jpeg
    |
    +---components
    |   |   Calendar.astro
    |   |   CentroRecursos.astro
    |   |   Competencias.astro
    |   |   Disciplinas.astro
    |   |   Footer.astro
    |   |   GaleriaPreview.astro
    |   |   Header.astro
    |   |   HeroCarousel.astro
    |   |   NoticiasPreview.astro
    |   |
    |   \---UI
    |           Button.astro
    |           PageHero.astro
    |           SectionTag.astro
    |           WaveDivider.astro
    |
    +---data
    |       adadet.ts
    |       albums.ts
    |       colaboradores.ts
    |       disciplinas.ts
    |       documentos.ts
    |       generated-ranking.json
    |       listaCompetencias.ts
    |       noticias.ts
    |       organigrama.ts
    |       routes.ts
    |
    +---layouts
    |       Layout.astro
    |       LayoutCompetencias.astro
    |
    +---pages
    |   |   calendario.astro
    |   |   colaboradores.astro
    |   |   contacto.astro
    |   |   galeria.astro
    |   |   index.astro
    |   |   noticias.astro
    |   |   quienes-somos.astro
    |   |   ranking.astro
    |   |   resultados.astro
    |   |
    |   +---api
    |   |       sendEmails.ts
    |   |
    |   +---disciplinas
    |   |       [slug].astro
    |   |
    |   +---documentos
    |   |       [slug].astro
    |   |
    |   +---galeria
    |   |       [id].astro
    |   |
    |   +---noticias
    |   |       [slug].astro
    |   |
    |   +---ranking
    |   |       [categoria].astro
    |   |
    |   \---resultados
    |           [slug].astro
    |
    \---styles
            global.css
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
