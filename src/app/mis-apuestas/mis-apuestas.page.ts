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
export class MisApuestasPage implements OnInit {

  @ViewChild(Nav) nav: Nav;

  misApuestas: Apuesta[] = [
    new Apuesta( new Date().toLocaleDateString(), 30.0, 1.5, 2, 1.78, 'Prueba de apuesta', 'Jogapuestas' ),
    new Apuesta( new Date().toLocaleDateString(), 30.0, 1.5, 2, 1.78, 'Prueba de apuesta', 'Jogapuestas' )
  ];

  resultadoActionSheetOptions: any = {
    header: 'Resultado',
    subHeader: 'Resultado de la apuesta'
  };

  constructor( 
    private alertCtrl: AlertController,
    private modalController: ModalController,
    private misApuestasSvc: MisApuestasService) {
      this.misApuestasSvc.getApuestas().then( (apuestas) => {
        this.misApuestas = apuestas;
      });
  }

  ngOnInit() {

  }

  colorFondoSegunResultado( apuesta: Apuesta ) {
    if( apuesta.esGanada() ) {
      return 'apuesta-ganada-fondo';
    }
    else if( apuesta.esPerdida() ) {
      return 'apuesta-perdida-fondo';
    }
    else if( apuesta.esNula() ) {
      return 'apuesta-nula-fondo';
    }
    return '';
  }

  cambiaResultadoApuesta( estadoApuesta: EstadoApuesta, resultado: ResultadoApuesta, apuesta: Apuesta ) {
    if( estadoApuesta === EstadoApuesta.DETERMINADA ) {
      if( resultado === ResultadoApuesta.GANADA ) {
        apuesta.ganada();
      }
      else if( resultado === ResultadoApuesta.PERDIDA ) {
        apuesta.perdida();
      }
      else if( resultado === ResultadoApuesta.NULA ) {
        apuesta.nula();
      } 
    }
    else {
      apuesta.pendiente();
    }
    this.misApuestasSvc.guardarApuestas();
  }

  async mostrarOpcionesResultado( apuesta: Apuesta ) {
    const alert = await this.alertCtrl.create({
      header: 'Resultado',
      message: '¿Cuál ha sido el resultado de la apuesta?',
      buttons: [,
        {
          text: 'Ganada 🤩',
          handler: () => {
            this.cambiaResultadoApuesta( EstadoApuesta.DETERMINADA, ResultadoApuesta.GANADA, apuesta );
          }
        },
        {
          text: 'Perdida 😔',
          handler: () => {
            this.cambiaResultadoApuesta( EstadoApuesta.DETERMINADA, ResultadoApuesta.PERDIDA, apuesta );
          }
        },
        {
          text: 'Nula 😐',
          handler: () => {
            this.cambiaResultadoApuesta( EstadoApuesta.DETERMINADA, ResultadoApuesta.NULA, apuesta );
          }
        },
        {
          text: 'Pendiente 🤞🏻',
          handler: () => {
            this.cambiaResultadoApuesta( EstadoApuesta.PENDIENTE, null, apuesta );
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }
      ]
    });

    await alert.present();
  }

  async modalNuevaApuesta() {
    const modal = await this.modalController.create({
      component: CrearEditarApuestaPage,
      componentProps: { editar: false }
    });
    return await modal.present();
  }

  async abrirDetalleApuesta( apuesta: Apuesta ) {
    const modal = await this.modalController.create({
      component: CrearEditarApuestaPage,
      componentProps: { editar: true, apuesta: apuesta }
    });
    return await modal.present();
    //this.nav.push( 'CrearEditarApuestaPage', { editar: true, apuesta: apuesta } );
  }

}