import { SharedModule } from './../shared.module';
import { ConfiguracionBankPageModule } from './../configuracion-bank/configuracion-bank.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionPage } from './configuracion.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ConfiguracionBankPageModule,
    SharedModule
  ],
  declarations: [ConfiguracionPage]
})
export class ConfiguracionPageModule {}