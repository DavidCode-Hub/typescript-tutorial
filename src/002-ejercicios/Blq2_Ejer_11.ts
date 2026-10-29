import { asyncWrapProviders } from "async_hooks";
import { log } from "console";

class Expediente{
    private static creados=0;

    constructor(public readonly numero:number, public nombre:string, private notas:number[]=[]){
        
    }
    static registrar(nombre:string):Expediente{
        Expediente.creados++;
        return new Expediente(1000+Expediente.creados,nombre)
    }

    static get getTotal(){
        return Expediente.creados;
    }

    anadirNota(notas:number){
        return ` ${notas<=0 && notas>=10?`Nota fuera de rango: ${notas}`:this.notas.push(notas)}`
    }

    get getMedia():number{
        return this.notas.reduce((acc, act)=>{return (acc+=act)})/this.notas.length 
    }

    
    get getcalificacion(){
        return `${this.getMedia >=9?"Sobresaliente":this.getMedia<9 && this.getMedia>=7?"Notable":this.getMedia<7 && this.getMedia>=5?"Suficiente":"Insuficiente"}`
    }
    
    
    get getHistorial():number[]{
        return [...this.notas]
    }
    
}

let p1= Expediente.registrar("Ana Serrano");
let p2= Expediente.registrar("Luis Gil");

p1.anadirNota(8)
p1.anadirNota(9.5)
p1.anadirNota(7)

p2.anadirNota(4)

let historialAna= p1.getHistorial;
historialAna=[1,2,3,4,5,6,7,9]
console.log(p1.getHistorial);
console.log(p1);

console.log(`Expediente ${p1.numero} - ${p1.nombre} : ${p1.getcalificacion}`);
console.log(`Notas ${p1.getHistorial.join(", ")}`);
console.log(`Media ${p1.getMedia}`);

console.log(`Expediente ${p2.numero} - ${p2.nombre} : ${p1.getcalificacion}`);
console.log(`Notas ${p1.getHistorial.join(", ")}`);
console.log(`Media ${p1.getMedia}`);



