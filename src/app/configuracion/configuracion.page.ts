import { MyNavService } from './../my-nav.service';
import { Configuracion } from './../models/configuracion';
import { ConfiguracionService } from './../configuracion.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, Nav } from '@ionic/angular';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  @ViewChild(Nav) nav: Nav;

  configuracion: Configuracion;

  constructor( 
    private configuracionSvc: ConfiguracionService, 
    private navCtrl: NavController,
    private myNavSvc: MyNavService ) {
    this.recargarConfiguracion();
  }

  recargarConfiguracion() {
    this.configuracionSvc.obtenerConfiguracion().then( (configuracion) => {
      this.configuracion = configuracion;
    });
  }

  ngOnInit() {
  }

  irAConfiguracionBank() {
    this.myNavSvc.push( '/tabs/(configuracion:bank)', { configuracion: this.configuracion } );
  }

}
