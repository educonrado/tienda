import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { Product } from 'src/app/core/interfaces/product.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit, OnDestroy {

  @Input()
  producto!: Product;
  @Output()
  productClicked: EventEmitter<any> = new EventEmitter();
  today = new Date();

  constructor(
    private cartService: CartService
  ) {
    console.log('1. constructor');
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.debug('2. ngOnChanges');
  //   console.log(changes);
  // }

  ngOnInit(): void {
    console.log('3. ngOnInit');
  }

  // ngDoCheck() {
  //   console.log('4. ngDoCheck');
  // }

  ngOnDestroy(): void {
    console.log('5. ngOnDestroy');
  }

  addCart(): void {
    console.log('Agregar al carrito');
    // this.productClicked.emit(this.producto.id);
    this.cartService.addCart(this.producto);
  }



}
