# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

# 🏊‍♂️ Asociación de Deportes Acuáticos del Estado Táchira (ADADET)

![Project Banner](/public/preview.png) > **Sitio Web Oficial:** [https://adadet.vercel.app](https://adadet.vercel.app) 

A modern web platform developed to manage communication, results, rankings, and transparency for the swimming association.

---


## 🛠️ How to install?
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Macaco2593/ProyectoAdadet](https://github.com/Macaco2593/ProyectoAdadet)
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run local server:**
    ```bash
    npm run dev
    ```

## 🚀 Technologies

* **Framework:** [Astro](https://astro.build/) (v5)
* **Styles:** Tailwind CSS
* **Deploy:** Vercel
* **Icons:** Heroicons / native SVG
* **ContactForm:** Send Emails for developers (https://resend.com/)
 
## Configure Environment Variables:
Create a .env file in the root directory and add your API keys (Required for the contact form):

* RESEND_API_KEY=re_123456789...


## 📂 Project Structure

This project follows a static file-based architecture (NoSQL). All content is managed through TypeScript files located in `src/data`.

* 📂`src/data/adadet.ts`: Basic information of the association, like mission, vision, social media...
    * Edit here to update global site information.

* 📂`src/data/albums.ts`: Manages the Photo Gallery structure.
    * To add a new album: Define the album metadata here first. Then, create a new folder in `src/assets/albums` ensuring the directory name matches the id defined in this file. Finally, upload the pictures to that folder.

* 📂`src/data/colaboradores.ts`: List of partners and collaborators.
    * To manage collaborators: Add, update, or delete entries here. Upload the corresponding logos/images to `src/assets/`.

* 📂`src/data/disciplinas.ts`: Information regarding aquatic disciplines.
    * To update: Change descriptions, images, or file references here. Discipline images are stored in `src/assets`.

* 📂`src/data/documentos.ts`: Registry for legal and technical PDFs (rules and rankings).
    * All the documents info non-related with competitions results, etc are defined here.
    * If you upload a new file, make sure all the info is defined here.
    * Routing: When adding a file, you MUST define its slug in `DOCUMENTOS_SLUG`. This is required to generate the static landing page at `/documentos/[slug]`.
    * Discipline Files: Technical regulations for disciplines are also linked here. If you add a new one, ensure you also update the reference in `src/data/disciplinas.ts`.

* 📂`src/data/listaCompetencias.ts`: Calendar and results for competitions.
    * To add an event: Define the event info (name, id, filenames) here.
    * File Storage: Create a new folder in `public/contenido/competencias_pdf`. The folder name must match the `linkDeLaCompetencia` property.
    * Upload: Place the PDF results inside that folder, ensuring filenames match the `nombreArchivo` property defined in the code.

* 📂`src/data/noticias.ts`: Blog/News feed.
    * To publish news: Add a new object to the array with the article details.
    * Images: Upload news images to the path `src/assets/noticias`.

* 📂`src/data/organigrama.ts`: Board members and organizational structure.
    * Edit here to update job titles or remove members.
    * Note: The organizational chart file (PDF/Image) is imported; if you need to change the file itself, update it in `src/data/documentos.ts`.

---

### ⚙️ Automation Scripts (Ranking API)

I created an internal script to read, decode, and transform CSV ranking files into a clean JSON interface, replacing static PDFs.

* 📂`scripts/procesarRanking.ts`: Script that reads, decodes and transforms CSV ranking files.
    * How to update the Ranking:
        1. Export results from Meet Manager: Select "Top Times" and "By Event", making sure to select the specific competitions you want to compare.
        2. Export as CSV.
        3. Upload the file to the `raw-data` folder (root directory).
        4. Open your terminal in the project root.
        5. Run: `npm run ranking` (or `npx tsx scripts/procesarRanking.ts`).
        6. If the process is successful, a message will appear in the console stating that the ranking has been successfully created.
        7. Success: The script generates `src/data/generated-ranking.json`. This file drives the `/ranking` page automatically.

---

### 📧 Contact Form

The project uses the Resend API for email services.

* 📂`src/pages/api/sendEmails.ts`: Backend controller.
    * Edit here to change the email template, subject line, or destination address.
    * If you want to add new inputs in the form, modify the HTML form in `src/pages/contacto.astro`, then update `sendEmails.ts` to handle the new data.

* 📂`src/pages/contacto.astro`: Frontend form.
    * To add inputs: Modify the HTML form here, then update `sendEmails.ts` to handle the new data.


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
