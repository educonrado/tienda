import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/core/interfaces/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  // Para la tabla de datamodeler neesitamos array con texto de columnas
  displayedColumns: string[] = ['id', 'image', 'title', 'price', 'actions'];
  constructor(
    private productService: ProductsService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchProduct();
  }

  fetchProduct(): void {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }

  private deleteProduct(id: string): void {
    this.productService.deleteProduct(id).subscribe(
      (response) => {
        console.log(response);
        this.fetchProduct();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openDialog(id: string): void {
    const dialogRef = this.dialog.open(DialogContentComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteProduct(id);
      }
    });
  }
}

@Component({
  selector: 'dialog-content-app',
  templateUrl: 'dialog-content.html',
})
export class DialogContentComponent {}
