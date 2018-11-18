import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CrearEditarApuestaPage } from './crear-editar-apuesta.page';

const routes: Routes = [
  {
    path: '',
    component: CrearEditarApuestaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CrearEditarApuestaPage]
})
export class CrearEditarApuestaPageModule {}
