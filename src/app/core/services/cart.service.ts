import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private products: Product[] = [];
  // Instancia de behavior
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();
  constructor() {}

  addCart(product: Product): void {
    this.products = [...this.products, product];
    this.cart.next(this.products);
  }
}
