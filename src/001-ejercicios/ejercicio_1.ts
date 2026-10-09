type Grupo= {nombre:string, tutor:string};

const modulo={nombre:"IES Carrillo", ciclo:"1ºDAM",plazas_tot:30};
const grupo:Grupo= {nombre:"DAM", tutor:"Ana Lisa"}

grupo.tutor="Armando Guerra";

let num_alumnos:number=26;
num_alumnos+=2;
console.log(modulo);

console.log(`Matriculados: ${num_alumnos} de ${modulo.plazas_tot} \n
Plazas Libres: ${modulo.plazas_tot - num_alumnos} \n
Ocupación: ${num_alumnos>30?"No quedan plazas":((num_alumnos/modulo.plazas_tot)*100).toFixed(2)+"%"}\n`);

