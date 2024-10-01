import { Persona } from "./Persona";

export class Jugador extends Persona  {
    private camiseta:number;
    private posicion:string;
    private esCapitan:boolean;
    // private estitular:boolean;   
    constructor (camiseta:number, posicion:string,esCapitan:boolean, nombre:string,dni:number){
        super(nombre,dni);
        this.camiseta=camiseta;
        this.posicion=posicion;
        this.esCapitan=esCapitan;
    }
    
    // Getters
    public getCamiseta(): number {
        return this.camiseta;
    }

    public getEsCapitan(): boolean {
        return this.esCapitan;
    }

    
    // Setters
    public setCamiseta(camiseta: number): void {
        this.camiseta = camiseta;
    }
    
    public setEsCapitan(esCapitan: boolean): void {
        this.esCapitan = esCapitan;
    }

}