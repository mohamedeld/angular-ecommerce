import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'public',
    loadChildren: () =>
      import('./public/public-routing.module').then(
        (m) => m.PublicRoutingModule
      ),
  },
  {
    path: '',
    redirectTo: '/public',
    pathMatch: 'full',
  },
];
