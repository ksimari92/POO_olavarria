import { Jugador } from "./Jugador";
import { Dt } from "./dt";

export class Equipo{
    private nombre:string;
    private dt:Dt;
    private jugadores:Jugador[];
    //duda de la clase, el arreglo de jugadores ya esta en dt, podria sacarlo del equipo? 
    //Piensen para la proxima clase como trabajarian, que cambios se necesitan en las clases?
    //pista: a quien le pertenecen los jugadores?
    
    constructor (nombre:string,dt:Dt,jugadores:Jugador[]){
        this.nombre=nombre;
        this.dt=dt;
        this.jugadores=jugadores;
    }

    public getDt():Dt{
        return this.dt;
    }


}