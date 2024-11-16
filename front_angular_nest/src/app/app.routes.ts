import { AuthModule } from './../../../backend_cuarto/src/modules/auth/auth.module';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin-routing.module').then((m) => m.AdminRoutingModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.authModule)
  }
];
