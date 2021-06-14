import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AdminGuard } from './core/guards/admin.guard';
import { LayoutComponent } from './layout/layout.component';
import { OrderRoutingModule } from './order/order-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
        // component: HomeComponent
        // Con esrto se resuelve todo un modulo
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./tienda/tienda.module').then((m) => m.TiendaModule),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./social/social.module').then((m) => m.SocialModule),
      },
      {
        path: 'order',
        loadChildren: () =>
          import('./order/order.module').then((m) => m.OrderModule),
      },
    ],
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      // Carga otros módulos si yt solo si el navegador está listo dando cargando de forma rápida el main.js
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
