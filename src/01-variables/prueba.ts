import { log } from "console";
import { Interface } from "readline";
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

let coche = { matricula: "123456T", color: "verde", tipo:"coupe" };

interface coche{
    nombre:string;
    edad:number;
    dni?:string;

}

console.log(styleText('white',`Matricula: ${coche.matricula} y el coche es de tipo ${coche.tipo}`));

console.log(styleText('red',`Matricula: ${coche.matricula} y el coche es de tipo ${coche.color}`));

coche.matricula="3453245";
coche.color="Blanco Perla";

console.log(styleText('blue',`Matricula: ${coche.matricula} y el coche es de tipo ${coche.color}`));

console.log(`${nombre==="david" ? console.log("ha dado true") : console.log("hola")}`); // Operador IF en una sola linea


type Usuario = {nombre:string, direccion?:{ciudad: String}}; // Operador de acceso seguro permite escribir undefined al operador ?


// Optional chaining `?.`: si `direccion` es undefined, devuelve undefined en vez de romper.
const user1: Usuario = {nombre: "Ana", direccion: {ciudad: "Cadiz"}}; 

const use2: Usuario = {nombre:"Jose"} // Si la variable/atributo de objeto es null o undifined en el campo donde esta el ? la devuelve undefined en vez de romper el programa.

console.log(`Direccion de ana es: ${user1.direccion?.ciudad}`|| "No se conoce" ); 
// ?? Evalua directamente si un atributo es undifined, null ( es como que lee la base absoluta de lo que se esta evaluando)
// || Evalua todos los campos pero dando resultdos "falsos":

// Cuidado: `||` también sustituye "" y 0, `??` no.
const cantidad = 0;
console.log("con || ->", cantidad || 99); // 99  (0 se considera falsy)
console.log("con ?? ->", cantidad ?? 99); // 0   (0 no es null ni undefined)




//Spred --> "Construccion"
const numeros = [1, 2, 3];
const masNumeros = [...numeros, 4, 5]; // copia + añade
console.log("spread array ->", masNumeros);

const base = { nombre: "Ana", edad: 20 };
const ampliado = { ...base, ciudad: "Cádiz" }; // copia + añade propiedad
console.log("spread objeto ->", ampliado);




console.log(styleText("red","Desestructuracion de arrays"));

const numeros2 = [4,5,6];
// Desestructuración de array
const [primero, segundo] = numeros2;
console.log("desestructurando array ->", primero, segundo);



// Desestructuración de objeto (así se reciben props en Angular/JS moderno)
const { nombre: nombreUsuario, edad: edadUsuario } = base;
console.log("desestructurando objeto ->", nombreUsuario, edadUsuario);


type persona2 = {nombre:string,apellidos: string, edad:number}

const persona2 = {nombre: "Ana", apellidos:"Guitierrez", edad: 18}

let {nombre:nombre_persona2, edad:edad_persona2}=persona2

console.log("Datos separados nombre:", nombre_persona2, "edad:" ,edad_persona2);



console.log(styleText("red","For Of, for In"));

// for...of : recorre VALORES
const frutas = ["manzana", "pera", "plátano"];
for (const fruta of frutas) {
  console.log(`for...of -> ${fruta}`);
}

// for...in : recorre CLAVES (índices o propiedades)
for (const indice in frutas) {
  console.log(`for...in -> índice ${indice}`);
}
const array2d: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];


// unir con "..." sirve para array, objetos, cadenas... etc
let array1:number[] =[1,2,3,4,5]
let array2:number[] =[6,7,8,9,0]

let array3: number[]=[...array1,...array2];

//La regla anterior vale con primitivos (number, string, boolean). Si el array contiene objetos, el spread copia las referencias: el array es nuevo, pero los objetos de dentro son los mismos.


console.log(array3);



let array4: number|string //Si lo dejamos SIN parentesis o almacena Number o es String

let array5: (number|string) // Si lo dejamos CON parentesis almacena Number y tambien String 




const user12: Usuario = {nombre: "Ana", direccion: {ciudad: "Cadiz"}}; 

const use22: Usuario = {nombre:"Jose"} 

let personas= [user12,use22]

let copia_personas: Usuario[]=[]
//copia un objeto que siempre se actualiza si se modifica despues.




for (const p of personas) {
    copia_personas.push({...p})
}

user12.nombre="jorge";

console.log(personas);
console.log(copia_personas);



console.log(personas);

let array22:number[]=[1,2,3,4,5,6,7]


console.log(styleText('red',`Funciones para arrays, cadenas etc`));

//Añade valor
array22.push(3)

//Añade elementos a la parte de delante del array
array22.unshift(0)

//Elimina el ultimo elemento y te lo devuelve
array22.pop()

//Elimina el primer elemento y te lo devuelve
array22.shift()




//Index of


let array33:number[]=[1,2,3,4,5,6,7]

console.log(array33.indexOf(5));


let frase:string=" lleva la tarra un vestido lleno de cascabeles"

console.log(frase.indexOf("vestido"));


//find
        //Es una funcion que espera la respuesta de una función


//map


// foreach



//reduce


