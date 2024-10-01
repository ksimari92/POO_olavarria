export class Persona {
    protected nombre:string;
    protected dni:number;
    
    constructor(pNombre:string,pDni:number) {
        this.nombre=pNombre;
        this.dni=pDni;
    }

    // Getters
    public getNombre(): string {
        return this.nombre;
    }

    public getDni(): number {
        return this.dni;
    }

    // Setters
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    public setDni(dni:number):void{
        if(dni>0)
            this.dni=dni;
    }
    
}