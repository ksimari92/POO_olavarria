export class Alumno {
    private nombre: string;
    private nota: number;

    constructor(nombre: string, nota: number) {
        this.nombre = nombre;
        this.nota = nota;
    }

     getNombre(): string {
        return this.nombre;
    }


     estaAprobado(): boolean {
        if (this.nota >= 7) {
            return true;
        } else {
            return false;
        }
    }

     getNota(): number {
        return this.nota;
    }
}