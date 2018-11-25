import { Configuracion } from './../models/configuracion';
import { MyNavService } from './../my-nav.service';
import { ConfiguracionService } from './../configuracion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracion-bank',
  templateUrl: './configuracion-bank.page.html',
  styleUrls: ['./configuracion-bank.page.scss'],
})
export class ConfiguracionBankPage implements OnInit {

  configuracion: Configuracion = new Configuracion();

  constructor( private configuracionSvc: ConfiguracionService, private myNavSvc: MyNavService ) {
    this.configuracionSvc.obtenerConfiguracion().then((configuracion) => {
      this.configuracion = configuracion;
    });
  }

  ngOnInit() {
    
  }

  guardarConfiguracionBank() {
    this.configuracionSvc.guardarConfiguracion();
  }

}
