import { estaAprobado } from "../ejercicios/soluciones/ejercicio-17/modelos/alumno.model"

interface Facturable{
    calcularImporte():number
    ficha():string
}
type EstadoCita="pendiente" | "en consulta" | "atendida" | "cancelada"

abstract class Cita implements Facturable{
    public estado:EstadoCita ="pendiente"

    constructor(public readonly id:number, public duenio:string, public mascota:string, ) {
        this.id
        this.duenio
        this.mascota
        this.estado
    }

    cambiarEstado(nuevo:EstadoCita){
        this.estado=nuevo
    }

    abstract calcularImporte(): number
    ficha():string{
        return `# ${this.id} - ${this.duenio} - ${this.mascota} - ${this.estado}`
    }

}

class Consulta extends Cita {
    constructor( id:number,  duenio:string,  mascota:string, private urgencia: boolean, ) {
        super(id, duenio, mascota)
    }

    override calcularImporte(): number {
        return this.urgencia?35+20:35
    }

    override ficha(): string {
        let string
        if (this.urgencia) {
             string= `${super.ficha()} - URGENTE`
        }else{
            string = `${super.ficha()}`
        }
        return string
    }


}

class Vacunacion extends Cita {
    constructor( id:number,  duenio:string,  mascota:string, private numVacunas: number, private precioVacuna:number ) {
        super(id, duenio, mascota)
    }

    override calcularImporte(): number {
        return 0
    }

    override ficha(): string {
            return ` ${super.ficha()} - Vacunas ${this.numVacunas}`
    }

}

class GestionClinica {
    private static citas:Cita[]
    private static ultimoId:number=0
       

    static registrarConsulta(duenio:string, mascota:string, urgencia:boolean):Cita{
        let consulta1=new Consulta(this.ultimoId, duenio, mascota, false)        
        this.citas.push(consulta1)
        this.ultimoId++
        return consulta1
    }

    static registrarVacunacion(duenio: string, mascota:string, numVacunas:number, precioVacuna:number){
        let vacuna= new Vacunacion(this.ultimoId, duenio, mascota, numVacunas, precioVacuna)
    }

    static listar(){
       return structuredClone(this.citas)
    }

    static buscar(id:number){
        return this.citas.find((a)=>{return a.id==id})
    }


}
