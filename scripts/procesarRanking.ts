import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse';
import { fileURLToPath } from 'url';

// --- CONFIGURACIÓN ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ajusta esto si tu CSV está en otro lado
const INPUT_FOLDER = path.join(__dirname, '../raw-data');
const OUTPUT_FILE = path.join(__dirname, '../src/data/generated-ranking.json');

// --- TIPOS DE DATOS ---
interface Marca {
  tiempoTexto: string; // "25,40" o "1:05,30"
  tiempoMilisegundos: number; // Para ordenar
  fecha: string;
  competencia: string;
  piscina: string; // "L" (Larga 50m) o "S" (Corta 25m)
}

interface AtletaRanking {
  nombre: string;
  club: string;
  edad: number;
  marca: Marca; // La mejor marca de este atleta en esta prueba
}

// Estructura: Categoría -> Género -> Prueba -> Array de Atletas
type RankingDb = Record<string, { 
  masculino: Record<string, AtletaRanking[]>; 
  femenino: Record<string, AtletaRanking[]>; 
}>;

const db: RankingDb = {};

// --- FUNCIONES DE AYUDA ---

// Convierte "1:05,30" o "25,40" a milisegundos para poder saber cuál es menor
function parseTime(tiempoStr: string): number {
  if (!tiempoStr) return 999999999;
  
  // Limpiar caracteres raros y cambiar coma por punto
  let limpio = tiempoStr.trim().replace(',', '.');
  
  // Si tiene minutos (ej: "1:05.30")
  if (limpio.includes(':')) {
    const partes = limpio.split(':');
    const minutos = parseInt(partes[0]);
    const segundos = parseFloat(partes[1]);
    return (minutos * 60 * 1000) + (segundos * 1000);
  }
  
  // Si son solo segundos (ej: "25.40")
  return parseFloat(limpio) * 1000;
}

function getCategoria(edad: number): string {
  if (edad <= 9) return "pre-infantil";
  if (edad >= 10 && edad <= 11) return "infantil-a";
  if (edad >= 12 && edad <= 13) return "infantil-b";
  if (edad >= 14 && edad <= 15) return "juvenil-a";
  if (edad >= 16 && edad <= 18) return "juvenil-b";
  return "maxima"; 
}

function limpiarNombre(nombreRaw: string): string {
  if (!nombreRaw) return "";
  if (nombreRaw.includes(',')) {
    const partes = nombreRaw.split(',');
    if (partes.length === 2) {
       return `${partes[1].trim()} ${partes[0].trim()}`;
    }
  }
  return nombreRaw.trim();
}

// Limpia el nombre de la prueba (ej: "Women   50 Free" -> "50m Libre")
function limpiarPrueba(eventoRaw: string): string {
  let nombre = eventoRaw.toLowerCase();
  
  // Quitar género
  nombre = nombre.replace('women', '').replace('men', '').replace('girls', '').replace('boys', '').trim();
  
  // Traducir estilos
  nombre = nombre.replace('free', 'Libre')
                 .replace('back', 'Espalda')
                 .replace('breast', 'Pecho')
                 .replace('fly', 'Mariposa')
                 .replace('im', 'Combinado');
                 
  // Formato bonito "50m Libre"
  return nombre.replace(/(\d+)/, '$1m ').replace(/\s+/g, ' ').toUpperCase();
}

// --- PROCESO PRINCIPAL ---

async function procesar() {
  console.log(`🚀 Generando Ranking por MEJORES TIEMPOS...`);

  const archivos = fs.readdirSync(INPUT_FOLDER).filter(f => f.toLowerCase().endsWith('.csv'));
  
  if (archivos.length === 0) {
      console.error("❌ No encontré archivos .csv en src/data.");
      return;
  }

  // Diccionario temporal para evitar duplicados:
  // Clave: "Categoria|Genero|Prueba|NombreAtleta" -> Valor: Mejor Marca
  const mejoresMarcasPorAtleta: Record<string, AtletaRanking> = {};

  for (const archivo of archivos) {
    const ruta = path.join(INPUT_FOLDER, archivo);
    console.log(`📄 Leyendo: ${archivo}...`);
    
    const parser = fs.createReadStream(ruta, { encoding: 'latin1'}).pipe(parse({
      delimiter: ',', relax_column_count: true, from_line: 1, trim: true
    }));

    for await (const row of parser) {
      // Mapeo columnas Hy-Tek (verificado con tu CSV anterior)
      const rawEvento = row[12]; // "Women 50 Free"
      const rawTiempo = row[15]; // "29,33"
      const rawPiscina = row[16]; // "L" o "S"
      const rawNombre = row[21];
      const rawEdad = row[23];
      const rawClub = row[24];
      const rawFecha = row[27]; // "27/5/2025"
      const rawCompetencia = row[28]; // "CAMPEONATO NACIONAL..."

      if (!rawNombre || !rawTiempo || !rawEvento) continue;
      if (rawEdad === 'Age/Yr') continue; // Ignorar header repetido

      const edad = parseInt(rawEdad);
      if (isNaN(edad)) continue;

      // 1. Datos Básicos
      const catId = getCategoria(edad);
      const nombreAtleta = limpiarNombre(rawNombre);
      const nombrePrueba = limpiarPrueba(rawEvento);
      
      const eventoStr = String(rawEvento).toLowerCase();
      const esFemenino = eventoStr.includes('women') || eventoStr.includes('girls') || eventoStr.includes('damas') || eventoStr.includes('femenino');
      const generoKey = esFemenino ? 'femenino' : 'masculino';

      // 2. Procesar Tiempo
      const tiempoMs = parseTime(rawTiempo);

      // 3. ID Único para comparar: "infantil-a|femenino|50M LIBRE|Juan Perez"
      const uniqueKey = `${catId}|${generoKey}|${nombrePrueba}|${nombreAtleta}`;

      // 4. Lógica de "Mejor Tiempo"
      // Si el atleta ya tiene un tiempo registrado en esta prueba, comparamos.
      if (!mejoresMarcasPorAtleta[uniqueKey] || tiempoMs < mejoresMarcasPorAtleta[uniqueKey].marca.tiempoMilisegundos) {
        
        // Si es nuevo o es mejor tiempo, lo guardamos/reemplazamos
        mejoresMarcasPorAtleta[uniqueKey] = {
          nombre: nombreAtleta,
          club: rawClub || "SIN CLUB",
          edad: edad,
          marca: {
            tiempoTexto: rawTiempo,
            tiempoMilisegundos: tiempoMs,
            fecha: rawFecha,
            competencia: rawCompetencia,
            piscina: rawPiscina
          }
        };
      }
    }
  }

  // --- TRANSFORMAR DICCIONARIO A ESTRUCTURA FINAL ---
  
  // Ahora agrupamos por Categoría -> Prueba
  const resultadoFinal = [];
  
  // Títulos bonitos
  const titulosCat: Record<string, string> = {
    "infantil-a": "Infantil A", "infantil-b": "Infantil B",
    "juvenil-a": "Juvenil A", "juvenil-b": "Juvenil B",
    "maxima": "Máxima", "pre-infantil": "Pre-Infantil"
  };

  // Iterar sobre las marcas únicas procesadas
  const estructuraAgrupada: any = {};

  Object.entries(mejoresMarcasPorAtleta).forEach(([key, atleta]) => {
    const [catId, genero, prueba] = key.split('|');
    
    if (!estructuraAgrupada[catId]) estructuraAgrupada[catId] = { id: catId, titulo: titulosCat[catId] || catId, pruebas: {} };
    if (!estructuraAgrupada[catId].pruebas[prueba]) estructuraAgrupada[catId].pruebas[prueba] = { masculino: [], femenino: [] };
    
    estructuraAgrupada[catId].pruebas[prueba][genero].push(atleta);
  });

  // Convertir a Array y Ordenar los tiempos
  Object.values(estructuraAgrupada).forEach((cat: any) => {
    const pruebasArray = [];

    Object.entries(cat.pruebas).forEach(([nombrePrueba, ramas]: any) => {
      // Ordenar Masculino (Menor tiempo primero)
      ramas.masculino.sort((a: any, b: any) => a.marca.tiempoMilisegundos - b.marca.tiempoMilisegundos);
      // Ordenar Femenino
      ramas.femenino.sort((a: any, b: any) => a.marca.tiempoMilisegundos - b.marca.tiempoMilisegundos);

      if (ramas.masculino.length > 0 || ramas.femenino.length > 0) {
        pruebasArray.push({
          nombre: nombrePrueba,
          masculino: ramas.masculino,
          femenino: ramas.femenino
        });
      }
    });
    
    // Definir jerarquia de estilos para ordenar las pruebas (Libre primero, luego Espalda, etc.)
    const ordenEstilos: Record<string, number> = { 
        'LIBRE': 1, 
        'ESPALDA': 2, 
        'PECHO': 3, 
        'MARIPOSA': 4, 
        'COMBINADO': 5 
    };

    // 2. Función que calcula el "peso" de la prueba
    const getPesoPrueba = (nombre: string) => {
        const match = nombre.match(/(\d+)/);
        const distancia = match ? parseInt(match[0]) : 0;
        
        let estilo = 99; // Si no encuentra estilo, lo manda al final
        for (const [key, val] of Object.entries(ordenEstilos)) {
            if (nombre.includes(key)) { 
                estilo = val; 
                break; 
            }
        }
        
        return (estilo * 10000) + distancia;
    };

    // 3. Aplicar el ordenamiento
    pruebasArray.sort((a, b) => getPesoPrueba(a.nombre) - getPesoPrueba(b.nombre));

    if (pruebasArray.length > 0) {
      resultadoFinal.push({
        id: cat.id,
        titulo: cat.titulo,
        pruebas: pruebasArray
      });
    }
  });

  // Ordenar categorías
  const orden = ["pre-infantil", "infantil-a", "infantil-b", "juvenil-a", "juvenil-b", "maxima"];
  resultadoFinal.sort((a, b) => orden.indexOf(a.id) - orden.indexOf(b.id));

  const dataParaGuardar = {
    ultimaActualizacion: new Date().toISOString(),
    categorias: resultadoFinal
  };

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(dataParaGuardar, null, 2));
  console.log(`✅ ¡Éxito! Ranking de Tiempos generado en: ${OUTPUT_FILE}`);
}

procesar().catch(console.error);