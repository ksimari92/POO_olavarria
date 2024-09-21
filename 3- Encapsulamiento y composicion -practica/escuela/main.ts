import { Alumno } from "./Alumno";
import { Profesor } from "./Profesor";
import { Escuela } from "./Escuela";

// Crear alumnos
const alumno1 = new Alumno("Marcelo", 8);
const alumno2 = new Alumno("Diana", 6);
const alumno3 = new Alumno("Juan", 9);

// Crear profesor
const profesor1 = new Profesor("Profe Karen");
const profesor2 = new Profesor("Profe Mauri");

// Alumnos que pertenecen a un profe
profesor1.añadirAlumno(alumno1);
profesor1.añadirAlumno(alumno2);

profesor2.añadirAlumno(alumno3);

// Crear escuela
const escuela = new Escuela("Escuela Primaria");

// Matricular alumnos (a la escuela)
escuela.matricularAlumno(alumno1);
escuela.matricularAlumno(alumno2);
escuela.matricularAlumno(alumno3);

// Contratar profe
escuela.contratarProfesor(profesor1);
escuela.contratarProfesor(profesor2);


// Verificar si un alumno está aprobado
console.log(`${alumno1.getNombre()} está aprobado: ${alumno1.estaAprobado()}, su nota es ${alumno1.getNota()}`);
console.log(`${alumno2.getNombre()} está aprobado: ${alumno2.estaAprobado()}`);

//Ver lista de alumnos de la escuela
console.log("Alumnos en la escuela:", escuela.obtenerAlumnos().map(alumno => alumno.getNombre()));

// Desvincular un alumnos de la escuela 
escuela.expulsarAlumno("Juan");
console.log("Alumnos después de expulsar a Juan:", escuela.obtenerAlumnos().map(alumno => alumno.getNombre()));

// Despedir a un profesor
escuela.despedirProfesor("Profe Karen");
console.log("Profes después de despedir a Karen:", escuela.obtenerProfesores().map(profesor => profesor.getNombre()));