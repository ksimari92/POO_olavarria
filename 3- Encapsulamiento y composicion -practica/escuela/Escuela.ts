import { Alumno } from "./Alumno";
import { Profesor } from "./Profesor";


export class Escuela {
    private nombre: string;
    private alumnos: Alumno[];
    private profesores: Profesor[];

    constructor(nombre: string, listaDeAlumnos?: Alumno[], listaDeProfesores?: Profesor[]) {
        this.nombre = nombre;

        if (listaDeAlumnos != undefined) {
            this.alumnos = listaDeAlumnos;
        } else {
            this.alumnos = [];
        }

        if (listaDeProfesores != undefined) {
            this.profesores = listaDeProfesores;
        } else {
            this.profesores = [];
        }
    }

    getNombre() : string {
        return this.nombre;
    }

    matricularAlumno(alumno: Alumno): void {
        this.alumnos.push(alumno);
    }

    contratarProfesor(profesor: Profesor): void {
        this.profesores.push(profesor);
    }

    expulsarAlumno(nombre: string): void {
        this.alumnos = this.alumnos.filter(alumno => alumno.getNombre() !== nombre);
    }
   // ["Juan","Mario","Pepe"] =  ["Juan", "Mario"]
    despedirProfesor(nombre: string): void {
        this.profesores = this.profesores.filter(profesor => profesor.getNombre() !== nombre);

    }

    obtenerAlumnos(): Alumno[] {
        return this.alumnos;
    }

    obtenerProfesores(): Profesor[] {
        return this.profesores;
    }
}
