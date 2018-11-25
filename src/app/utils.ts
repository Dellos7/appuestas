import { AlertController } from '@ionic/angular';
import { MisApuestasService } from './mis-apuestas.service';
import { Apuesta, EstadoApuesta, ResultadoApuesta } from './models/apuesta';
export class Utils {

    protected misApuestasSvc: MisApuestasService;
    protected alertCtrl: AlertController;

    colorFondoSegunResultado(apuesta: Apuesta) {
        if (apuesta.esGanada()) {
            return 'apuesta-ganada-fondo';
        }
        else if (apuesta.esPerdida()) {
            return 'apuesta-perdida-fondo';
        }
        else if (apuesta.esNula()) {
            return 'apuesta-nula-fondo';
        }
        return '';
    }

    cambiaResultadoApuesta( estadoApuesta: EstadoApuesta, resultado: ResultadoApuesta, apuesta: Apuesta, guardar: boolean ) {
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
        if( guardar ) {
          this.misApuestasSvc.guardarApuestas();
        }
      }
    
      async mostrarOpcionesResultado( apuesta: Apuesta, guardar: boolean ) {
        const alert = await this.alertCtrl.create({
          header: 'Resultado',
          message: '¿Cuál ha sido el resultado de la apuesta?',
          buttons: [,
            {
              text: 'Ganada 🤩',
              handler: () => {
                this.cambiaResultadoApuesta( EstadoApuesta.DETERMINADA, ResultadoApuesta.GANADA, apuesta, guardar );
              }
            },
            {
              text: 'Perdida 😔',
              handler: () => {
                this.cambiaResultadoApuesta( EstadoApuesta.DETERMINADA, ResultadoApuesta.PERDIDA, apuesta, guardar );
              }
            },
            {
              text: 'Nula 😐',
              handler: () => {
                this.cambiaResultadoApuesta( EstadoApuesta.DETERMINADA, ResultadoApuesta.NULA, apuesta, guardar );
              }
            },
            {
              text: 'Pendiente 🤞🏻',
              handler: () => {
                this.cambiaResultadoApuesta( EstadoApuesta.PENDIENTE, null, apuesta, guardar );
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

}