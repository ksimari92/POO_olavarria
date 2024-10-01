import { Persona } from "./Persona";
import { Jugador } from "./Jugador";
export class Dt extends Persona{
    private arrJugadores:Jugador[];
    constructor(nombre:string,dni:number,arrJug:Jugador[]) {
        super(nombre,dni);
        this.arrJugadores=arrJug;
    }

    public cambiarCapitan(jugador:Jugador):void{
        for (let i = 0; i < this.arrJugadores.length; i++) {
           this.arrJugadores[i].setEsCapitan(false); 
        }
        jugador.setEsCapitan(true);
        console.log("Se cambio de capitan a: "+ jugador.getNombre());
        
    }
//  let jugador =this.arrJugadores.find(jugador=>jugador.getDni()===5000000)
//jugador.setJugadorBanca
//jug2.setTitular();
}


