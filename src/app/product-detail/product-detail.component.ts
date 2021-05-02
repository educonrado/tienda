import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { ProductsService } from '../core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: any;

  constructor(
    private _route: ActivatedRoute,
    private _servicioProducts: ProductsService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      const id = params.id;
      this.product = this._servicioProducts.getProduct(id);
    });
  }

}
