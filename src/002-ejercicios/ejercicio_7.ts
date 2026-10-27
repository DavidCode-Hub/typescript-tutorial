import { log } from "console";

function notaFinal(practica:number, examen:number, pesoExamen:number) {
    practica * (1-pesoExamen)+examen * pesoExamen
}

let pesoExamen:number=0.6;
let practicaa:number=8;
let examenn:number= 5;

function actaAlumno(nombre:string, nota:number, observaciones?:string) {
    console.log(`Nombre: ${nombre} Nota: ${nota} ${observaciones!==undefined?`Observaciones: ${observaciones}`:""}`);
    
}

actaAlumno("Ana", 6.5,"Puede sacar más nota");

actaAlumno("Luis", 8);

let notas:number[]=[7, 8, 9, 4, 10];

function mediaDe(...notas:number[]) {
    
}