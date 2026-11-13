
export {}
interface TareaApi {
    userId: number
    id: number
    title: string
    completed: boolean

}

interface Tarea {
    id: number
    titulo: string
    completada: boolean
}



async function obtenerTareas(id_usuario: number): Promise<Tarea[]> {
    const URL = `https://jsonplaceholder.typicode.com/todos?userId=${id_usuario}`

    
    let response: Response = await fetch(URL)
    let data = (await response.json() as TareaApi[])

    let datos: Tarea[] = data.map((api) => { return { id: api.id, titulo: api.title, completada: api.completed } })
    return datos
}

let datos_tareas:Tarea[]= await obtenerTareas(1)


let total_tareas= datos_tareas.length
let cantidad_disponibles= datos_tareas.filter((comple) => { return comple.completada == true }).length

console.log(`Total tareas: ${total_tareas} 
Tareas completadas ${cantidad_disponibles}
Porcentaje de tareas: ${(((cantidad_disponibles)/(total_tareas))*100).toFixed(1)}
`)
console.log(datos_tareas.filter((datos)=>{return !datos.completada && datos.id<=3}).map((map)=>{return  map.titulo}));


const [user1, user2]= await Promise.all([obtenerTareas(1), obtenerTareas(2)])

let tareas_contar=datos_tareas.filter((tarea)=>{return tarea.completada }).length
console.log(tareas_contar);



function contartareas(user:Tarea[]):number {
    return user.filter((tarea)=>{return tarea.completada }).length
}

console.log(`Tareas User 1: ${contartareas(user1)}, Tarea User 2: ${contartareas(user2)} `);



                                  