import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productos: Product[] = [];

  constructor(
    private productoServicio: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  clickProduct(id: number): void {
    console.log('producto:' + id);
  }

  fetchProducts() {
    this.productoServicio.getAllProducts()
    .subscribe(products => {
      this.productos = products;
    })
  }

}
