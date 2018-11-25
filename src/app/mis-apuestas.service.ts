import { Apuesta } from './models/apuesta';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class MisApuestasService {

  private apuestas: Apuesta[] = [];

  constructor( private storage: Storage ) { }

  async getApuestas() {
    if( this.storage ) {
      let apuestasJson = await this.storage.get('apuestas');
      if( apuestasJson ) {
        let apuestas = JSON.parse( apuestasJson );
        if( !apuestas ) {
          this.apuestas = [];
        }
        else {
          let apuestasObjArr: Apuesta[] = [];
          for( let apuesta of apuestas ) {
            let apuestaObj: Apuesta = new Apuesta(null, null, null, null, null, null, null);
            Object.assign( apuestaObj, apuesta );
            apuestasObjArr.push(apuestaObj);
          }
          this.apuestas = apuestasObjArr;
        }
      }
    }
    return this.apuestas;
  }

  guardarApuestas() {
    if( this.storage ) {
      this.storage.set('apuestas', JSON.stringify(this.apuestas));
    }
  }

  nuevaApuesta( apuesta: Apuesta ) {
    //this.getApuestas()
    this.apuestas.push(apuesta);
    this.guardarApuestas();
  }

  eliminarApuesta( apuesta: Apuesta ) {
    //this.getApuestas();
    this.apuestas.splice( this.apuestas.indexOf(apuesta), 1 );
    this.guardarApuestas();
  }

}
