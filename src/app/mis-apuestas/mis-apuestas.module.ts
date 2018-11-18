import { CrearEditarApuestaPageModule } from './../crear-editar-apuesta/crear-editar-apuesta.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MisApuestasPage } from './mis-apuestas.page';

const routes: Routes = [
  {
    path: '',
    component: MisApuestasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearEditarApuestaPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MisApuestasPage]
})
export class MisApuestasPageModule {}
