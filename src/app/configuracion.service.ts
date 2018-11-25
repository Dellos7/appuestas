import { Configuracion } from './models/configuracion';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  private configuracion: Configuracion = new Configuracion();

  constructor( private storage: Storage ) { }

  async obtenerConfiguracion() {
    if( this.storage ) {
      let configuracionJson = await this.storage.get('configuracion');
      if( configuracionJson ) {
        let configuracion = JSON.parse( configuracionJson );
        if( !configuracion ) {
          this.configuracion = new Configuracion();
        }
        else {
          Object.assign( this.configuracion, configuracion );
        }
      }
    }
    return this.configuracion;
  }

  guardarConfiguracion() {
    if( this.storage ) {
      this.storage.set('configuracion', JSON.stringify(this.configuracion));
    }
  }

}
