import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { NavComponent } from './components/nav/nav.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ReporteComponent } from './components/reporte/reporte.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'products/edit/:id',
        component: FormProductComponent
      },
      {
        path: 'products/create',
        component: FormProductComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'reporte',
        component: ReporteComponent
      },
      {
        path: 'products',
        component: ProductsListComponent
      },
      {
        path: 'orders',
        component: OrdersListComponent
      },
      {
        path: 'create',
        component: ProductFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
