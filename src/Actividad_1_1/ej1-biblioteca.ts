type Libro = { titulo: string, autor: string, anio: number, paginas: number, disponible: boolean }

let catalogo: Libro[] = [{ titulo: "El Quijote", autor: "Cervantes", anio: 1605, paginas: 863, disponible: true },
{ titulo: "La Regenta", autor: "Clarín", anio: 1884, paginas: 712, disponible: false },
{ titulo: "Niebla", autor: "Unamuno", anio: 1914, paginas: 296, disponible: true },
{ titulo: "Nada", autor: "Carmen Laforet", anio: 1945, paginas: 288, disponible: true },
{ titulo: "Marianela", autor: "Galdós", anio: 1878, paginas: 240, disponible: false }]

let listadisponibles: string[] = catalogo.filter(disponibles => { return disponibles.disponible }).map((libro) => { return libro.titulo })
//let titulos_disponibles=listadisponibles.map((libro)=>{return libro.titulo})

console.log(listadisponibles.join(" | "));

let nums_pags: number = catalogo.map((pags) => { return pags.paginas }).reduce((acc, act) => { return acc += act })
console.log(nums_pags);

//d
function buscarPorAutor(lista: Libro[], autor: string): Libro | undefined {
    return lista.find(libro => libro.autor === autor)
}
    let libro_autor= buscarPorAutor(catalogo, "Unamuno")?.titulo
console.log(`Unamuno: ${libro_autor==undefined?"No encontrado":libro_autor}`);

//e

/*function prestar(lista: Libro[], titulo: string):Libro[]|undefined {
     return lista.map((libro_prest)=>{libro_prest.titulo===titulo?libro_prest.disponible:false})
}*/
function prestar(lista: Libro[], titulo: string): Libro[] {
  return lista.map(libro => libro.titulo === titulo ? { ...libro, disponible: false } : libro);
}

let nueva_lista:Libro[]|undefined= prestar(catalogo, "El Quijote");

console.log(nueva_lista);
