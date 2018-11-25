import { PageContentWidthDirective } from './../page-content-width.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CrearEditarApuestaPage } from './crear-editar-apuesta.page';
import { SharedModule } from '../shared.module';

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
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [CrearEditarApuestaPage]
})
export class CrearEditarApuestaPageModule {}
