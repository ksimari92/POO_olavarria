// Implementar una Selección de Fútbol, conformada por Futbolistas, Entrenador y Masajista. 
// Cada integrante posee nombre, apellido, número de pasaporte y fecha de nacimiento.
// Aplicar herencia donde sea posible.


import { Jugador } from "./Jugador";
import { Dt } from "./dt";
import { Equipo } from "./equipo";

let arquero:Jugador=new Jugador(1,"arquero",true,"Juan",40999111);
let defensa:Jugador=new Jugador(1,"defensor",false,"Jose",40999112);
let atacante:Jugador=new Jugador(1,"delantero",false,"Pedro",40999113);

let arrJugadores:Jugador[]=[arquero,defensa,atacante];

let director:Dt=new Dt("pepe",1200000,arrJugadores);

let equipo:Equipo=new Equipo("cebollitas",director,arrJugadores);

console.log(equipo.getDt().getNombre());
console.log(atacante.getEsCapitan());
equipo.getDt().cambiarCapitan(atacante);
console.log(atacante.getEsCapitan());


