import { log } from "console";
import { platform } from "os";

type Videojuego={
    titulo:string,
    plataforma:string,
    precio:number,
    stock:number,
    anio:number
}

let catalogo:Videojuego[]=[{titulo:"Zelda TOTK", plataforma:"Switch",precio:60, stock:4, anio:2023},
                            {titulo:"God Of War", plataforma:"PS5",precio:50, stock:0, anio:2022},
                            {titulo:"Halo Infinite", plataforma:"Xbox",precio:30, stock:7, anio:2021},
                            {titulo:"Mario Kart 8", plataforma:"Switch",precio:45, stock:12, anio:2017},
                            {titulo:"Elden Ring", plataforma:"PS5",precio:40, stock:3, anio:2022},
]


console.log(catalogo.filter((cant_stock)=>{return cant_stock.stock>0}).map((titulos)=>{return titulos.titulo}).join(" | "));

console.log(`Precio del catalogo por stock: ${catalogo.reduce((acc, act)=>{return acc+=act.precio*act.stock},0)}`);

function buscarPorPlataforma(lista:Videojuego[], plataforma:string) {
   let existe=lista.find((a)=>{return a.plataforma==plataforma})
   return existe 
}

console.log(`PS5: ${buscarPorPlataforma(catalogo, "PS5")?.titulo}`);


function filtrar(lista:Videojuego[], plataforma:string, precioMax?:number) {
    let filtrar=[...lista].filter((cant_stock)=>{return cant_stock.stock>0 && cant_stock.plataforma==plataforma && cant_stock.precio<precioMax!}).map((obt)=>{return obt.titulo})
    return filtrar
}

console.log(`${filtrar(catalogo, "PS5", 50)}`);

function rebajar(lista:Videojuego[], titulo:string, procentaje:number) {
   return [...lista].filter((obj)=>{return obj.titulo==titulo}).map((a)=>{return {titulo: a.titulo, plataforma: a.plataforma, precio: 30, stock: a.stock, anio: a.anio }})
}

console.log(rebajar(catalogo, "Elden Ring",10));
