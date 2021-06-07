import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from 'src/app/core/interfaces/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { MyValidators } from './../../../utils/validators';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  titulo: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    console.log('ngOnInit...');
    const id: string = this.route.snapshot.params.id;
    if (id === undefined) {
      this.titulo = true;
    } else {
      this.titulo = false;
      this.route.params.subscribe((params) => {
        const id = params.id;
        this.fecthProduct(id);
      });
    }
  }
  fecthProduct(id: any) {
    this.productService.getProduct(id).subscribe((prod) => {
      this.form.patchValue(prod);
      // patchvalue({id:prod.id})
    });
  }

  saveProduct(event: Event): void {
    // Evita que la página recargue cuando realiza submit
    event.preventDefault();
    if (this.form.valid) {
      const newProduct: Product = this.form.value;
      this.productService.createProduct(newProduct).subscribe((product) => {
        console.log(product);
        this.router.navigate(['admin/products']);
      });
    }
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      id: [null, [Validators.required]], // Primer itema es el valor del campo al iniciar puede ir solo con '' si no hay validaciones
      title: [null, [Validators.required]],
      price: [null, [Validators.required, MyValidators.isPriceValid]],
      image: '',
      description: [null, [Validators.required]],
    });
  }

  get priceField(): any {
    return this.form.get('price');
  }
}
