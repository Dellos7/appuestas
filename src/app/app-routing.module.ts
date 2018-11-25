import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'CrearEditarApuesta', loadChildren: './crear-editar-apuesta/crear-editar-apuesta.module#CrearEditarApuestaPageModule' },
  { path: 'Configuracion', loadChildren: './configuracion/configuracion.module#ConfiguracionPageModule' },
  { path: 'ConfiguracionBank', loadChildren: './configuracion-bank/configuracion-bank.module#ConfiguracionBankPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
