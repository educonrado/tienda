import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { groupBy, map, mergeMap, toArray } from 'rxjs/operators';
import { Product } from 'src/app/core/interfaces/product.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  products$: Observable<Product[]>;
  //cantidad$:Observable<number>;
  displayedColumns: string[] = [
    'title',
    'image',
    'price',
    'cantidad',
    'actions',
  ];
  constructor(private cartService: CartService) {
    // escucha continua de los productso que se están agregando al carrito
    this.products$ = this.cartService.cart$;
    this.cartService.cart$
      .pipe(
        map((products) => {
          products.forEach((product: Product) => {
            console.log(product);
            
          });
        })
      )
      .subscribe((total) => {
        console.log(total);
      });
    /*
    this.total$ = this.cartService.cart$
      .pipe(map((products) => products.length));
    */
  }

  ngOnInit(): void {}
}
