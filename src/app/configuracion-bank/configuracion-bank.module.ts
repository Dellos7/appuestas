import { SharedModule } from './../shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionBankPage } from './configuracion-bank.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionBankPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [ConfiguracionBankPage]
})
export class ConfiguracionBankPageModule {}
