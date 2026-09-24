import { log } from "console";
import { styleText } from "util";

let nombre: string = "Jose";
let nombre2: string = "Hola";

console.log(nombre);

function saludo(nombre: string) {
    console.log(`Hola ${nombre}`);
}
nombre = "david";

saludo(nombre);

function saludar(nombre2: string, nombre: string): string {
    return `${nombre2} ${nombre}`
}

console.log("prueba de funcion saludar");

let saludoecho = saludar(nombre2, nombre);

console.log(saludoecho);

console.log(styleText('bold', saludoecho));

const coche = { matricula: "123456T", color: "verde", tipo:"coupe" };

console.log(styleText('white',`Matricula: ${coche.matricula} y el coche es de tipo ${coche.tipo}`));

console.log(styleText('red',`Matricula: ${coche.matricula} y el coche es de tipo ${coche.color}`));

coche.matricula="3453245";
coche.color="Blanco Perla";

console.log(styleText('blue',`Matricula: ${coche.matricula} y el coche es de tipo ${coche.color}`));
