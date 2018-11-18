import { MisApuestasService } from './../mis-apuestas.service';
export enum ResultadoApuesta {
    PERDIDA = -1,
    NULA = 0,
    GANADA = 1
}

export enum EstadoApuesta {
    PENDIENTE = "pendiente",
    DETERMINADA = "determinada"
}

export class Apuesta {

    fecha: string;
    bankPrepartido: number;
    stake: number;
    apuesta: number;
    cuota: number;
    descripcion: string;
    tipster: string;
    resultado: ResultadoApuesta;
    estado: EstadoApuesta;

    constructor(
        fecha: string,
        bankPrepartido: number,
        stake: number,
        apuesta: number,
        cuota: number,
        descripcion: string,
        tipster: string
    ) {
        this.fecha = fecha;
        this.bankPrepartido = bankPrepartido;
        this.stake = stake;
        this.apuesta = apuesta;
        this.cuota = cuota;
        this.descripcion = descripcion;
        this.tipster = tipster;
        this.estado = EstadoApuesta.PENDIENTE;
    }

    ganada() {
        if( this.esGanada() ) {
            this.pendiente();
            this.resultado = null;
        }
        else {
            this.finalizada();
            this.resultado = ResultadoApuesta.GANADA;
        }
    }

    perdida() {
        if( this.esPerdida() ) {
            this.pendiente();
            this.resultado = null;
        }
        else {
            this.finalizada();
            this.resultado = ResultadoApuesta.PERDIDA;
        }
    }

    nula() {
        if( this.esNula() ) {
            this.pendiente();
            this.resultado = null;
        }
        else {
            this.finalizada();
            this.resultado = ResultadoApuesta.NULA;
        }
    }

    pendiente() {
        this.estado = EstadoApuesta.PENDIENTE;
        this.resultado = null;
    }

    finalizada() {
        this.estado = EstadoApuesta.DETERMINADA;
    }

    obtenerGananciasPotenciales() {
        return this.apuesta * this.cuota;
    }

    obtenerUnidadesPotenciales() {
        return (this.stake * this.cuota) - 1;
    }

    esGanada() {
        return this.estado === EstadoApuesta.DETERMINADA && this.resultado === ResultadoApuesta.GANADA;
    }

    esPerdida() {
        return this.estado === EstadoApuesta.DETERMINADA && this.resultado === ResultadoApuesta.PERDIDA;
    }

    esNula() {
        return this.estado === EstadoApuesta.DETERMINADA && this.resultado === ResultadoApuesta.NULA;
    }

    esFinalizada() {
        return this.estado === EstadoApuesta.DETERMINADA;
    }

    fechaFormateada() {
        return this.fecha;
    }

}