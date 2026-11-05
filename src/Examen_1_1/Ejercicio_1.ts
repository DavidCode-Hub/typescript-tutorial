/*
🎯 Enunciado: Sistema de Gestión de Concesionario
Vas a crear un sistema para gestionar los vehículos y pedidos de un concesionario. Sigue las instrucciones paso a paso:
Paso 1: Tipos de datos, Enum y Template Literals
    Crea un enum llamado ESTADO_ENTREGA con los valores: PENDIENTE, EN_TRANSITO, ENTREGADO.
    Define un Template Literal Type llamado EMAIL_CLIENTE que valide correos con la estructura: ${string}@${"gmail" | "outlook"}.${"es" | "com"}.
    Define una Tupla llamada Ubicacion que guarde [latitud: number, longitud: number].
Paso 2: Interfaces y Tipos de Utilidad
    Crea una interfaz Cliente que tenga:
    id: number (solo lectura / readonly).
    nombre: string.
    email: EMAIL_CLIENTE.
    Crea un tipo FormularioActualizacionCliente usando el tipo de utilidad Partial sobre Cliente pero quitándole el id usando Omit.
Paso 3: Clases y Herencia
    Crea la clase base Vehiculo:
    Atributos en el constructor: public id: number, public marca: string, public modelo: string, public precio: number, public disponible: boolean = true.
    Método toString(): que devuelva una cadena formateada con la información del vehículo.
    Crea una clase VehiculoElectrico que herede de Vehiculo:
    Atributo propio: public autonomia: number (en km).
    Sobrescribe (override) el método toString() para incluir la autonomía.
    Añade una método estático en la clase Vehiculo llamado calcularDescuento(precio: number, porcentaje: number): number que aplique un descuento sobre un precio dado.
Paso 4: Lógica de negocio (Arrays y Métodos de Array)
    Crea un array inicial de vehículos con al menos 4-5 elementos (mezclando Vehiculo normales y VehiculoElectrico). Luego realiza las siguientes operaciones:
    filter: Obtén un array solo con los vehículos que estén disponibles y cuyo precio sea mayor a 15000.
    map: Genera un array con los títulos comerciales de todos los vehículos (ejemplo: "MARCA MODELO - PRECIO€").
    findIndex: Busca la posición del primer vehículo cuya marca sea "Tesla" (o la marca que elijas de tu lista).
    reduce: Calcula el precio total acumulado de todos los vehículos que están en el inventario.
Desestructuración: Dado un objeto cliente, desestructura su nombre y email, guardando el resto de datos en una variable usando el operador rest (...).
*/

type ESTADO_ENTREGA="PENDIENTE" | "EN_TRANSITO" | "ENTREGADO"
type patron_EMAIL_CLIENTE= `${string}@${"gmail.com" | "outlook"}. ${"es"| "com"}`

let ubicacion:[latitud:number,longitud:number];

interface Cliente {
    readonly id:number
    nombre:string
    email:patron_EMAIL_CLIENTE
}

type FormularioActualizacionCliente=Partial<Omit<Cliente , "id">>

class Vehiculo{
    constructor(public id:number, public marc:string, public modelo:string, public precio:number, public disponible=true){
    }
    toString(){
        console.log(`ID: ${this.id} Marca: ${this.marc} Modelo: ${this.modelo} Precio: ${this.precio} Disponible${this.disponible?"Disponible":"No Disponible"}`);   
    }
}

class VehiculoElectrico extends Vehiculo{
    
    constructor( id:number,  marc:string,  modelo:string,  precio:number,  disponible=true, public autonomia:number){
        super(id, marc, modelo, precio, disponible)
        
    }
}


let vehi:VehiculoElectrico={id:1234, marc:"pene", modelo:"turbo", precio:0.20, disponible:true, autonomia:100}

console.log(vehi);
