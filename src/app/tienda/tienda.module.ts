import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiendaRoutingModule } from './tienda-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductsComponent } from './products/products.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductoComponent,
    ProductsComponent
  ],
  exports: [
    ProductDetailComponent,
    ProductoComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    TiendaRoutingModule,
    MaterialModule
  ]
})
export class TiendaModule { }
