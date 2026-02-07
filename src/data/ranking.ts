export interface Atleta {
  posicion: number;
  nombre: string;
  club: string;
  puntos: number;
}

export interface CategoriaRanking {
  id: string;
  titulo: string; // Ej: "Infantil A"
  edades: string; // Ej: "10 - 11 años"
  masculino: Atleta[]; // Lista de chicos
  femenino: Atleta[];  // Lista de chicas
}

// 2. La Data Real
export const RANKING_DATA: CategoriaRanking[] = [
  {
    id: "infantil-a",
    titulo: "Infantil A",
    edades: "10 - 11 años",
    femenino: [
      { posicion: 1, nombre: "Sofía Martínez", club: "Táchira SC", puntos: 150 },
      { posicion: 2, nombre: "Valentina Ruiz", club: "Demócrata", puntos: 142 },
      { posicion: 3, nombre: "Camila López", club: "ADADET", puntos: 130 },
      { posicion: 4, nombre: "Andrea Pérez", club: "Táchira SC", puntos: 110 },
    ],
    masculino: [
      { posicion: 1, nombre: "Pedro Pérez", club: "Demócrata", puntos: 145 },
      { posicion: 2, nombre: "Juan García", club: "Táchira SC", puntos: 138 },
      { posicion: 3, nombre: "Luis Colmenares", club: "UNET", puntos: 125 },
    ],
  },
  {
    id: "infantil-b",
    titulo: "Infantil B",
    edades: "12 - 13 años",
    femenino: [
      { posicion: 1, nombre: "Maria Rodriguez", club: "Táchira SC", puntos: 160 },
    ],
    masculino: [
      { posicion: 1, nombre: "Carlos Zambrano", club: "Demócrata", puntos: 155 },
    ],
  },
  // Puedes agregar Juvenil A, B, etc. aquí copiando la estructura
];