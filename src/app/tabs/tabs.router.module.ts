import { ConfiguracionBankPage } from './../configuracion-bank/configuracion-bank.page';
import { ConfiguracionPage } from './../configuracion/configuracion.page';
import { MisApuestasPage } from './../mis-apuestas/mis-apuestas.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(misapuestas:misapuestas)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'about',
        outlet: 'about',
        component: AboutPage
      },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactPage
      },
      {
        path: 'misapuestas',
        outlet: 'misapuestas',
        component: MisApuestasPage
      },
      {
        path: 'configuracion',
        outlet: 'configuracion',
        component: ConfiguracionPage
      },
      {
        path: 'bank',
        outlet: 'configuracion',
        component: ConfiguracionBankPage
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(misapuestas:misapuestas)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
