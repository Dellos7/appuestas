import { Utils } from './../utils';
import { CrearEditarApuestaPage } from './../crear-editar-apuesta/crear-editar-apuesta.page';
import { Apuesta, ResultadoApuesta, EstadoApuesta } from './../models/apuesta';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, ModalController, Nav } from '@ionic/angular';
import { MisApuestasService } from '../mis-apuestas.service';

@Component({
  selector: 'app-mis-apuestas',
  templateUrl: './mis-apuestas.page.html',
  styleUrls: ['./mis-apuestas.page.scss'],
})
export class MisApuestasPage extends Utils implements OnInit {

  @ViewChild(Nav) nav: Nav;

  misApuestas: Apuesta[] = [];

  resultadoActionSheetOptions: any = {
    header: 'Resultado',
    subHeader: 'Resultado de la apuesta'
  };

  constructor( 
    protected alertCtrl: AlertController,
    protected modalCtrl: ModalController,
    protected misApuestasSvc: MisApuestasService) {
      super();
      this.recargarApuestas();
  }

  ngOnInit() {

  }

  recargarApuestas() {
    this.misApuestasSvc.getApuestas().then( (apuestas) => {
      this.misApuestas = apuestas;
    });
  }

  async modalNuevaApuesta() {
    const modal = await this.modalCtrl.create({
      component: CrearEditarApuestaPage,
      componentProps: { editar: false }
    });
    return await modal.present();
  }

  async abrirDetalleApuesta( apuesta: Apuesta ) {
    const modal = await this.modalCtrl.create({
      component: CrearEditarApuestaPage,
      componentProps: { editar: true, apuesta: apuesta }
    });
    modal.onDidDismiss().then( () => {
      this.recargarApuestas();
    });
    return await modal.present();
    //this.nav.push( 'CrearEditarApuestaPage', { editar: true, apuesta: apuesta } );
  }

}