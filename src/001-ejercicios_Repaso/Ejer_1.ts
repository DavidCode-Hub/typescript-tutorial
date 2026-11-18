import { read } from "fs"

type Genero= "accion"|"comedia"|"drama"|"terror"

type Serie={
    readonly id : number
    titulo:string
    genero:Genero
    temporadas:number
    valoracion?:number
    reparto:string[]
}
let serie:Serie[]=[{id:1, titulo: "Nocturnia", genero:"accion", temporadas:3, valoracion:8.5, reparto:["Ana", "Luis"]},
                    {id:2, titulo: "Risas", genero:"comedia", temporadas:5, valoracion:7, reparto:["Marta"]},
                    {id:3, titulo: "El Faro", genero:"terror", temporadas:1, reparto:["Pablo", "Sara", "Ivan"]}, 
                    {id:4, titulo: "Capital", genero:"drama", temporadas:4, valoracion:9 ,reparto:["Luis", "Elena"]},
                    {id:5, titulo: "Brujula", genero:"accion", temporadas:2 ,reparto:[]}]

for (const elemnt of serie) {
    console.log(`#${elemnt.id} ${elemnt.titulo} [${elemnt.genero}] - ${elemnt.valoracion===undefined?"Sin valorar":elemnt.valoracion}`);
    
}

let media= serie.filter((serie)=>{return serie.valoracion!==undefined})

let media_media=media.reduce((acc, act)=>{return acc+=act.valoracion! },0)

let resultado= (media_media/media.length).toFixed(2)
console.log(resultado);

