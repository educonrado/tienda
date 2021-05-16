import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  // Para la tabla de datamodeler neesitamos array con texto de columnas
  displayedColumns: string[] = ['id', 'image', 'title', 'price', 'actions'];
  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProduct();
  }

  fetchProduct(): void {
    this.productService.getAllProducts()
      .subscribe(products => {
        this.products = products;
      });
  }

  deleteProduct(id: string): void {
    this.productService.deleteProduct(id)
      .subscribe(
        response => {
          console.log(response);
          this.fetchProduct();
        },
        error => {
          console.log(error);
        });
  }

}
