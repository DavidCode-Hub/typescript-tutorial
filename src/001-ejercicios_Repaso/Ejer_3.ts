interface Facturable{
    calcularImporte():number
    ficha():string
}
type EstadoCita="pendiente" | "en consulta" | "atendida" | "cancelada"

abstract class Cita {
    constructor(public readonly id:number, public duenio:string, mascota:string, estado:EstadoCita) {
        
    }
}