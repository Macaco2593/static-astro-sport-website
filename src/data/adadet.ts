import { DOCUMENTOS } from "./documentos";
import { DOCUMENTOS_SLUG } from "./documentos";
const organigrama = DOCUMENTOS.find(doc => doc.slug === DOCUMENTOS_SLUG.ORGANIGRAMA_ASOCIACION);
export const ADADET_INFO = {
  mision:
    "Promover, organizar y fortalecer el desarrollo de los deportes acuáticos en el estado Táchira, impulsando la formación integral de atletas, entrenadores y clubes; garantizando procesos transparentes, competencias de calidad y el bienestar de nuestra comunidad deportiva.",
  vision:
    "Ser una asociación referente a nivel regional y nacional por su gestión moderna, inclusiva y eficiente; capaz de proyectar el talento tachirense, elevar los estándares competitivos y consolidar una cultura deportiva sostenible en torno a los deportes acuáticos.",
  organigramaPdfUrl: organigrama?.archivo || "",
  correo: "adadet@adadet.org",
  numero: "+58 123-456-7890",
  facebook: "https://www.facebook.com/natacion.tachira?locale=es_LA",
  instagram: "https://www.instagram.com/nataciontachira/"
} as const;
