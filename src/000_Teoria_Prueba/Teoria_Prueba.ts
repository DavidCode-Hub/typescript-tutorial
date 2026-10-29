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

let coche = { matricula: "123456T", color: "verde", tipo: "coupe" };

const persona33 = { dni: "12345678", nombre23: "David", edad: 30 }

console.log(persona33);


interface coche {
  nombre: string;
  edad: number;
  dni?: string;

}

console.log(styleText('white', `Matricula: ${coche.matricula} y el coche es de tipo ${coche.tipo}`));

console.log(styleText('red', `Matricula: ${coche.matricula} y el coche es de tipo ${coche.color}`));

coche.matricula = "3453245";
coche.color = "Blanco Perla";

console.log(styleText('blue', `Matricula: ${coche.matricula} y el coche es de tipo ${coche.color}`));

console.log(`${nombre === "david" ? console.log("ha dado true") : console.log("hola")}`); // Operador IF en una sola linea


type Usuario = { nombre: string, direccion?: { ciudad: String } }; // Operador de acceso seguro permite escribir undefined al operador ?



//Si queremos hacer una variable como opcional lo indicamos con "?"
// Optional chaining `?.`: si `direccion` es undefined, devuelve undefined en vez de romper.

const user1: Usuario = { nombre: "Ana", direccion: { ciudad: "Cadiz" } };

const use2: Usuario = { nombre: "Jose" } // Si la variable/atributo de objeto es null o undifined en el campo donde esta el ? la devuelve undefined en vez de romper el programa.



console.log(`Direccion de ana es: ${user1.direccion?.ciudad}` || "No se conoce");
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




console.log(styleText("red", "Desestructuracion de arrays"));

const numeros2 = [4, 5, 6];
// Desestructuración de array
const [primero, segundo] = numeros2;
console.log("desestructurando array ->", primero, segundo);



// Desestructuración de objeto (así se reciben props en Angular/JS moderno)
const { nombre: nombreUsuario, edad: edadUsuario } = base;
console.log("desestructurando objeto ->", nombreUsuario, edadUsuario);


type persona2 = { nombre: string, apellidos: string, edad: number }

const persona2 = { nombre: "Ana", apellidos: "Guitierrez", edad: 18 }

let { nombre: nombre_persona2, edad: edad_persona2 } = persona2

console.log("Datos separados nombre:", nombre_persona2, "edad:", edad_persona2);



console.log(styleText("red", "For Of, for In"));

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
let array1: number[] = [1, 2, 3, 4, 5]
let array2: number[] = [6, 7, 8, 9, 0]

let array3: number[] = [...array1, ...array2];

//La regla anterior vale con primitivos (number, string, boolean). Si el array contiene objetos, el spread copia las referencias: el array es nuevo, pero los objetos de dentro son los mismos.


console.log(array3);



let array4: number | string //Si lo dejamos SIN parentesis o almacena Number o es String

let array5: (number | string) // Si lo dejamos CON parentesis almacena Number y tambien String 




const user12: Usuario = { nombre: "Ana", direccion: { ciudad: "Cadiz" } };

const use22: Usuario = { nombre: "Jose" }

let personas = [user12, use22]

let copia_personas: Usuario[] = []
//copia un objeto que siempre se actualiza si se modifica despues.




for (const p of personas) {
  copia_personas.push({ ...p })
}

user12.nombre = "jorge";

console.log(personas);
console.log(copia_personas);



console.log(personas);

let array22: number[] = [1, 2, 3, 4, 5, 6, 7]


console.log(styleText('red', `Funciones para arrays, cadenas etc`));

//Añade valor
array22.push(3)

//Añade elementos a la parte de delante del array
array22.unshift(0)

//Elimina el ultimo elemento y te lo devuelve
array22.pop()

//Elimina el primer elemento y te lo devuelve
array22.shift()




//Index of


let array33: number[] = [1, 2, 3, 4, 5, 6, 7]

console.log(array33.indexOf(5));


let frase: string = " lleva la tarra un vestido lleno de cascabeles"

console.log(frase.indexOf("vestido"));


//find
//Es una funcion que espera la respuesta de una función


//map

//Filter filtra los valores
console.log(styleText("red", "funcion filter"));
let numerosfilter = [4, 5, 4, 1, 9, 5, 4, 8]

let aprobados = numerosfilter.filter((valor: number) => { return valor >= 5 })
console.log(aprobados.length);

//findIndex
let numeros123 = [1, 2, 3, 4, 5, 6];
let numerosMayor10 = numeros123.findIndex((valor: number) => { return valor > 3 })
console.log(numerosMayor10);


// foreach



//reduce
console.log(styleText("red", "Funcion reduce"));


let numeros_reduce: number[] = [1, 2, 8, 4, 5];
let numero_alto: number = numeros_reduce.reduce((acumulador, actual) => { return actual > acumulador ? acumulador = actual : acumulador })
console.log(numero_alto);


let numeros_slice = numeros_reduce.slice(2, 5);
console.log(numeros_slice);


// Tuplas de datos
console.log(styleText("red", "Tupla de datos"));
let nombreEdad: [string, number] = ["Juan", 18]

let nombre_tuplas = nombreEdad[0];

console.log(nombre_tuplas);


type ProductoTupla = [nombre: string, precio: number]
type ProductoObject = { nombre: string, precio: number }

let p1: ProductoTupla = ["Champu", 10]
let p2: ProductoObject = { nombre: "pera", precio: 10 };


console.log(p1);
console.log(p2);


//Objetos
//Type Se puede "heredar uno dentro de otro"

type Direccion = { calle: string, numero: number };
type Persona = { nombre_per1: string, apellidos: string, direccion: Direccion }
let per1: Persona = { nombre_per1: "David", apellidos: "Seva Lara", direccion: { calle: "guardiola", numero: 20 } }

//Desestructuracion
// Extraccion de datos de Objetos.

let { nombre_per1, apellidos } = per1;

console.log(apellidos);


// Enumerados como en JAVA

enum DIA { LUNES = 1, MARTES, MIERCOLES, JUEVES, VIERNES }

let dia = DIA.LUNES

console.log(dia == DIA.LUNES ? "HOY ES LUNES" : "Hoy no es lunes");

/* CUIDADO CON LOS ENUMERADOS YA QUE SI SE AÑADE UN NUEVO
    ESTADO PODEMOS ENCONTRARNOS QUE CAMBIE DE POSICION EL 
    ESTADO QUE ESTABAMOS EVALUANDO POSTERIORMENTE
*/
enum ESTADO_PEDIDO {
  EN_REPARTO,
  EN_PROCESO,
  PENDIENTE,
  EN_PREPARACION
}
let estadoPreparacion: ESTADO_PEDIDO = ESTADO_PEDIDO.EN_PREPARACION

console.log(estadoPreparacion);


//Patrones para Type

type EMAIL = `${string}@${"gmail" | "outlook" | "hotmail"}.${"es" | "com"}`;
type resenna= 1|2

let numeroresenna: resenna= 1;






//Interfaces 
interface Usuario2 {
  id: number, //Se le puede poner valores con readony => lo que hace es que solo se puede leer
  nombre: string,
  email: EMAIL
}

interface Empleado extends Usuario2 {
  NUSS: number,
  Edad: string,
}

class Empleado2 implements Usuario2 {
  constructor( public id: number,public  nombre: string, public email: EMAIL) {
    
  }
}


let Empleado = { id: 12, nombre: "David", email: "jose@gmail.com", NUSS: 123, Edad: 23 };








// CLases de objetos

class Coche {         //Los datos de los atributos de la clase tienen que estar inicializados sino 
  // esta inicializado en el constructor tiene que definirse cuando se declaran
  marca: string;
  modelo: string;
  kilometros: number;
  matricula:string;
  color: string;


  constructor(marca: string, modelo: string, kilometros: number,matricula:string, color: string) {

    this.marca = marca;
    this.modelo = modelo;
    this.kilometros = kilometros;
    this.matricula=matricula;
    this.color = color;
  }

  /**
     * Si le pones la opcionalidad a un atributo tienes que ponerselo tambien en el constructor
     * 
     * marca: string;
     * modelo: string;
     * kilometros: number;
     * color?: string;
     * 
     *  constructor(marca: string, modelo: string, kilometros: number,color?: string) { 
     *      this.marca=marca;
     *      this.modelo=modelo;
     *      this.kilometros= kilometros;
     *      this.color= color;
     *  }
     */

  get getMarca() {
    return this.marca
  }

  set setMarca(marca: string) {
    this.marca = marca
  }

  toString() {
    console.log(`${this.marca} ${this.modelo} ${this.kilometros}${this.color} `)
  }

  arrancar(){
    console.log("El coche ha arrancado "+this.modelo);
    
  }


}






// Class Objeto "Inicializado"
class CocheElectrico {

  // Definicion de atributos sin inicializar.

  constructor(public marca: string, public modelo: string, public kilometros: number, public color: string) {
    this.marca = marca;
    this.modelo = modelo;
    this.kilometros = kilometros;
    this.color = color;
  }

  toString() {
    console.log(`${this.marca} ${this.modelo} ${this.kilometros}${this.color} `)
  }

  
}







//CLASE HERENCIA
class CocheElectrico_herencia extends Coche {

  // Definicion de atributos sin inicializar.

  constructor( marca: string,  modelo: string,  kilometros: number,matricula:string, color: string, public bateria:number) {
    super(marca,modelo, kilometros,matricula,color)
    this.bateria=bateria;
   
  }

  override arrancar():string{
    return `${super.arrancar()} su bateria es de ${this.bateria}%`
  }
}

class CocheCombustion_herencia extends Coche {

  // Definicion de atributos sin inicializar.

  constructor( marca: string,  modelo: string,  kilometros: number,matricula:string, color: string, public combustible:number) {
    super(marca,modelo, kilometros,matricula,color)
    this.combustible=combustible;
   
  }

  override arrancar():string{
    return `${super.arrancar()} su bateria es de ${this.combustible}litros`
  }
}

let coche1 = new Coche("SEAT", "ATECA", 1111111,"1234ABC", "negro");

let coche_herencia= new CocheElectrico_herencia("PEUGEOT", "302",123456,"5678DGV","blanco",20);













//Clases de metodos estaticos

class Utilidades {
  static suma(a: number, b: number) { return a + b }
}
console.log(Utilidades.suma(15, 4));



//Metodos static para Objetos.   
class CocheUtilidades {
  static contadorMatricula = 0;

  static creaCoche(marca: string, modelo: string, color: string) {
    this.contadorMatricula++;
    return new Coche(marca, modelo, 0, `${this.contadorMatricula}A`,color)
  }


}




