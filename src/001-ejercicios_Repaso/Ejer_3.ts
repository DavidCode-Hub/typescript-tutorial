import { estaAprobado } from "../ejercicios/soluciones/ejercicio-17/modelos/alumno.model"

interface Facturable{
    calcularImporte():number
    ficha():string
}
type EstadoCita="pendiente" | "en consulta" | "atendida" | "cancelada"

abstract class Cita implements Facturable{
    public estado:EstadoCita ="pendiente"

    constructor(public readonly id:number, public duenio:string, public mascota:string ) {
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
        return this.numVacunas * this.precioVacuna;
    }

    override ficha(): string {
            return ` ${super.ficha()} - Vacunas ${this.numVacunas}`
    }

}

class GestionClinica {
    private static citas:Cita[]=[]
    private static ultimoId:number=0
       

    static registrarConsulta(duenio:string, mascota:string, urgencia:boolean):Cita{
        this.ultimoId++
        let consulta1=new Consulta(this.ultimoId, duenio, mascota, false)        
        this.citas.push(consulta1)
        
        return consulta1
    }

    static registrarVacunacion(duenio: string, mascota:string, numVacunas:number, precioVacuna:number):Cita{
        this.ultimoId++
        let vacuna= new Vacunacion(this.ultimoId, duenio, mascota, numVacunas, precioVacuna)
        this.citas.push(vacuna)
        return vacuna
    }

    static listar(){
       return structuredClone(this.citas)
    }

    static buscar(id:number){
        return this.citas.find((a)=>{return a.id==id})
    }

    static cambiarEstado(id: number, nuevo:EstadoCita){
        let busca = GestionClinica.buscar(id)
        if (busca) {
            busca.cambiarEstado(nuevo)
            return true;
        } else {
            return false;
        }
        
    }

    static porEstado(estado:EstadoCita):number{
        let d = this.citas.filter((est)=>{return est.estado==estado}).map((a)=>{return a })
        return d.length
    }

    static totalFacturado(){
          
    }


}

let vacuna1=new Vacunacion(2, "Marcos", "Orum", 3, 30)
console.log(vacuna1.ficha());

GestionClinica.registrarVacunacion("Marcos", "Orum", 3, 30)
GestionClinica.registrarVacunacion("Ana", "Odin", 3, 30)
let cambiarestado= GestionClinica.cambiarEstado(1, "cancelada")
console.log(` Cambio de eestado ${cambiarestado}`);
console.log(GestionClinica.listar());

console.log(`Pendientes: ${GestionClinica.porEstado("pendiente")}`)



