import { Utils } from './../utils';
import { Apuesta } from './../models/apuesta';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams, AlertController } from '@ionic/angular';
import { MisApuestasService } from '../mis-apuestas.service';

@Component({
  selector: 'app-crear-editar-apuesta',
  templateUrl: './crear-editar-apuesta.page.html',
  styleUrls: ['./crear-editar-apuesta.page.scss'],
})
export class CrearEditarApuestaPage extends Utils implements OnInit {

  private apuesta: Apuesta;
  private editar: boolean;

  fecha: Date;

  constructor(
    protected modalCtrl: ModalController,
    private navParams: NavParams,
    protected misApuestasSvc: MisApuestasService,
    protected alertCtrl: AlertController) {
    super();
    this.editar = this.navParams.get('editar');

    if (this.editar && this.navParams.get('apuesta')) {
      this.apuesta = this.navParams.get('apuesta');
    }
    else {
      this.apuesta = new Apuesta(this.fechaDeHoy(), null, null, null, null, null, null);
    }
  }

  ngOnInit() {
  }

  fechaDeHoy() {
    let date = new Date();
    let dateStr = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    return dateStr;
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

  async guardarApuesta() {
    let apuestaValida = await this.validacionApuesta(true);
    if (apuestaValida) {
      if (!this.editar) {
        this.misApuestasSvc.nuevaApuesta(this.apuesta);
      }
      else {
        this.misApuestasSvc.guardarApuestas();
      }
      this.cerrar();
    }
  }

  async validacionApuesta(mostrarAlert: boolean) {
    let resValidarDatosApuesta = this.validarDatosApuesta();
    if (resValidarDatosApuesta.ok === 'ko') {
      if (mostrarAlert) {
        const alert = await this.alertCtrl.create({
          header: 'Error',
          message: resValidarDatosApuesta.mensaje,
          buttons: [
            {
              text: 'Ok',
              role: 'cancel'
            }
          ]
        });
        await alert.present();
      }
      return false;
    }
    return true;
  }

  validarDatosApuestaBool(): boolean {
    return this.validarDatosApuesta().ok === 'ok';
  }

  validarDatosApuesta(): { ok: string, mensaje?: string, campo?: string } {
    if (!this.apuesta.fecha) {
      return { ok: 'ko', mensaje: 'Es necesario introducir una fecha.', campo: 'fecha' };
    }
    if (!this.validarDatoNumerico(this.apuesta.bankPrepartido)) {
      return { ok: 'ko', mensaje: 'Es necesario introducir el bank prepartido.', campo: 'bankPrepartido' };
    }
    if (!this.validarStake()) {
      return { ok: 'ko', mensaje: 'Debes introducir un stake superior a 0.', campo: 'stake' };
    }
    if (!this.validarCuota()) {
      return { ok: 'ko', mensaje: 'Debes introducir una cuota superior a 0.', campo: 'cuota' };
    }
    if (!this.validarApuesta()) {
      return { ok: 'ko', mensaje: 'Debes introducir una apuesta superior a 0.', campo: 'apuesta' };
    }
    return { ok: 'ok' };
  }

  validarDatoNumerico(dato: number) {
    return dato != null && dato != undefined && dato.toString() != '';
  }

  validarStake() {
    return this.validarDatoNumerico(this.apuesta.stake) && this.apuesta.stake > 0;
  }

  validarCuota() {
    return this.validarDatoNumerico(this.apuesta.cuota) && this.apuesta.cuota > 0;
  }

  validarApuesta() {
    return this.validarDatoNumerico(this.apuesta.apuesta) && this.apuesta.apuesta > 0;
  }

  async eliminarApuesta() {
    const alert = await this.alertCtrl.create({
      header: 'Eliminar apuesta',
      message: '¿Estás seguro de que deseas eliminar la apuesta?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {}
        }, {
          text: 'Ok',
          handler: () => {
            this.misApuestasSvc.eliminarApuesta( this.apuesta );
            this.cerrar();
          }
        }
      ]
    });

    await alert.present();
  }

}
