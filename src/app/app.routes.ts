import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'citas',
    loadComponent: () => import('./pagina/citas/citas.page').then( m => m.CitasPage)
  },
  
  {
    path: 'configuraciones',
    loadComponent: () => import('./pagina/configuraciones/configuraciones.page').then( m => m.ConfiguracionesPage)
  },
];
