

//Ejercicio 1
interface Facturable{
    calcularImporte():number
    ficha():string
}
type EstadoReparacion="RECIBIDA"|"EN_REPARACION"|"TERMINADA"|"ENTREGADA"


abstract class Reparacion implements Facturable{
    
    constructor(public readonly id:number, public cliente:string, public modelo:string, public estado:EstadoReparacion){}

    /**
     * cambiarEstado
     */
    public cambiarEstado(nuevo:EstadoReparacion) {
                this.estado=nuevo
    }
    /**
     * calcularImporte
     */
    abstract calcularImporte():number
    
    public ficha():string{
        return `#${this.id} ${this.cliente} - ${this.modelo} - ${this.calcularImporte()} - ${this.estado}`
    }

} // FIn class abstract

class ReparacionPantalla extends Reparacion {
    constructor( id:number, cliente:string, modelo:string, estado:EstadoReparacion, private precioPieza:number, private urgente:boolean ) {
        super(id, cliente, modelo, estado)
    }


    override calcularImporte(): number {
        return ((this.precioPieza + 30)+(this.urgente?15:0))
    }


    override ficha():string{
        if (this.urgente) {
             return `#${super.id} ${super.cliente} - ${super.modelo} - ${this.calcularImporte()} - ${super.estado} - URGENTE`
        }else{
             return `#${super.id} ${super.cliente} - ${super.modelo} - ${this.calcularImporte()} - ${super.estado}`
        }
    }


}//Fin clase Reparacion

class GestionTaller{
    private static reparaciones:Reparacion[]
    private static ultimold:number=0

    public static registrar(cliente:string, modelo:string, precioPieza:number, urgente:boolean):Reparacion{
       this.ultimold++
       const rep1=new ReparacionPantalla(this.ultimold, cliente, modelo, "RECIBIDA",precioPieza, false);
       this.reparaciones.push(rep1);
       return rep1;
    }
    public static listar():Reparacion[]{
        let arrayCopia:Reparacion[]=[]
        for (let index = 0; index < this.reparaciones.length; index++) {
             arrayCopia.push(this.reparaciones[index])
            
        }
        return arrayCopia;
    }

    public static buscar(id:number){
        return this.reparaciones.find((id_reparacion)=>{return id_reparacion.id==id?id_reparacion:undefined})
    }

    public static cambiarEstado(id:number, nuevo:EstadoReparacion){
        return this.reparaciones.map((id_reparacion)=>{return id_reparacion.id?id_reparacion.estado=nuevo:false})
    }

}


