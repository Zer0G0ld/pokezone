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
    path: 'pokemon-detail/:name',
    loadComponent: () => import('./pages/pokemon-detail/pokemon-detail.page').then(m => m.PokemonDetailPage)
  },
  {
    path: 'pokemon-detail',
    loadComponent: () => import('./pages/pokemon-detail/pokemon-detail.page').then(m => m.PokemonDetailPage)
  },
];
