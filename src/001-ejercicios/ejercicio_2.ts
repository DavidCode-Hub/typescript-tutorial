let practica:number | null= 8.5;
let examen: number| null=null;
let nota3: number|null=0;

type Alumno={nombre:string, contacto?:Contacto};

type Contacto={email?:string, telefono?:number};

console.log("Practica : " +practica);
console.log(`Examen: ${examen??"Nota no registrada"}`);
console.log(`Nota 3: ${nota3??"Sin Nota"}`); // Dato real con el otro sale el texto
console.log(`Nota 3: ${nota3||"Sin Nota"}`);

const alum1: Alumno={nombre: "Ana",contacto:{email:"ana@ies.es"}};
const alum2: Alumno={nombre:"Luis",contacto:{telefono:123456789}}

console.log(`Email de ${alum1.nombre}: ${alum1.contacto?.email??"No consta"}`);
console.log(`Email de ${alum2.nombre}: ${alum2.contacto?.email??"No consta"}`);

console.log(`Tlf Ana: ${alum1.contacto?.telefono??"No consta"}`);
console.log(`Tlf Luis: ${alum2.contacto?.telefono??"No consta"}`);

const desdeFormulario:unknown ="7.25";
console.log("Convertida a numero", Number(desdeFormulario));

