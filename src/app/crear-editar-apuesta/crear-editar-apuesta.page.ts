import { Apuesta } from './../models/apuesta';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { MisApuestasService } from '../mis-apuestas.service';

@Component({
  selector: 'app-crear-editar-apuesta',
  templateUrl: './crear-editar-apuesta.page.html',
  styleUrls: ['./crear-editar-apuesta.page.scss'],
})
export class CrearEditarApuestaPage implements OnInit {

  private apuesta: Apuesta;
  private editar: boolean;

  constructor( private modalCtrl: ModalController, private navParams: NavParams, private misApuestasSvc: MisApuestasService ) {
    this.editar = this.navParams.get('editar');
    
    if( this.editar && this.navParams.get('apuesta') ) {
      this.apuesta = this.navParams.get('apuesta');
    }
    else {
      this.apuesta = new Apuesta(null, null, null, null, null, null, null);
    }
  }

  ngOnInit() {
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

  guardarApuesta() {
    if( !this.editar ) {
      this.misApuestasSvc.nuevaApuesta(this.apuesta);
    }
    else {
      this.misApuestasSvc.guardarApuestas();
    }
    this.cerrar();
  }

}
