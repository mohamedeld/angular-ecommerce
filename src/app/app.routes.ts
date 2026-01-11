import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'public',
    loadChildren: () =>
      import('./public/public-routing').then((m) => m.PublicRoutes),
  },
  {
    path: '',
    redirectTo: '/public',
    pathMatch: 'full',
  },
];
