import { StringMappingType } from "typescript"

export interface ContratosResponse{
    id:number,
    duracionContrato: string,
    estado: string,
    detalles: string,
    servicioTipoServicio: string,
    servicioPrecio: number,
    usuarioNombreComplt:string,
    cuidadorNombreComplt:string
    picRutaCuidador: string,
    picRutaUsuario:string,
    pagoContrato:Float32Array,
    pagoEstado: string
}

