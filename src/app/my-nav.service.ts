import { NavController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyNavService {

  data: any;

    constructor(public navCtrl: NavController) {}

    push(url: string, data: any = '') {
        this.data = data;
        this.navCtrl.navigateForward(url);
    }

    pop(url) {
        this.navCtrl.navigateBack(url);
    }

    get(key: string) {
        return this.data[key];
    }
}
