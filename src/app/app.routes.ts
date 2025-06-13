import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'calculator',
    loadComponent: () => import('./pages/calculator/calculator.page').then(m => m.CalculatorPage)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
