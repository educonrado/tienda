[1mdiff --cc src/app/admin/components/form-product/form-product.component.html[m
[1mindex bf843c7,25962fb..0000000[m
[1m--- a/src/app/admin/components/form-product/form-product.component.html[m
[1m+++ b/src/app/admin/components/form-product/form-product.component.html[m
[36m@@@ -10,6 -10,9 +10,12 @@@[m
            <mat-form-field class="full-width" *ngIf="titulo">[m
              <mat-label>Id</mat-label>[m
              <input formControlName="id" matInput type="text" placeholder="id" />[m
[32m++<<<<<<< HEAD[m
[32m++=======[m
[32m+             <mat-error *ngIf="form.controls['id'].hasError('required')">[m
[32m+               Campo requerido[m
[32m+             </mat-error>[m
[32m++>>>>>>> d3ed8affe99e30e9c65390e3cd6b82b9b4178bbd[m
            </mat-form-field>[m
          </div>[m
        </div>[m
[36m@@@ -23,6 -26,9 +29,12 @@@[m
                type="text"[m
                placeholder="title"[m
              />[m
[32m++<<<<<<< HEAD[m
[32m++=======[m
[32m+             <mat-error *ngIf="form.controls['title'].hasError('required')">[m
[32m+               Campo requerido[m
[32m+             </mat-error>[m
[32m++>>>>>>> d3ed8affe99e30e9c65390e3cd6b82b9b4178bbd[m
            </mat-form-field>[m
          </div>[m
        </div>[m
[36m@@@ -31,6 -37,9 +43,12 @@@[m
            <mat-form-field class="full-width">[m
              <mat-label>Price</mat-label>[m
              <input formControlName="price" matInput type="number" />[m
[32m++<<<<<<< HEAD[m
[32m++=======[m
[32m+             <mat-error *ngIf="form.controls['price'].hasError('required')">[m
[32m+               Campo requerido[m
[32m+             </mat-error>[m
[32m++>>>>>>> d3ed8affe99e30e9c65390e3cd6b82b9b4178bbd[m
            </mat-form-field>[m
            <!-- Manejo de expeciones para presentar uno u otro mensaje de error siempre y cuando el usuario haya comenzsado a escribir (dirty) o tenga error (errors) -->[m
            <!-- También es posible remplazar (form.get('price')) por priceField creando en el ts el método get -->[m
[36m@@@ -53,19 -62,22 +71,35 @@@[m
                matInput[m
                placeholder="description"[m
              ></textarea>[m
[32m++<<<<<<< HEAD[m
[32m++=======[m
[32m+             <mat-error[m
[32m+               *ngIf="form.controls['description'].hasError('required')"[m
[32m+             >[m
[32m+               Campo requerido[m
[32m+             </mat-error>[m
[32m++>>>>>>> d3ed8affe99e30e9c65390e3cd6b82b9b4178bbd[m
            </mat-form-field>[m
          </div>[m
        </div>[m
      </mat-card-content>[m
      <mat-card-actions>[m
[32m++<<<<<<< HEAD[m
[32m +      <button mat-raised-button color="secondary" routerLink="/admin/products">[m
[32m +        Cancelar[m
[32m +      </button>[m
[32m++=======[m
[32m+       <button mat-raised-button color="secondary" routerLink="/admin/products">Cancelar</button>[m
[32m++>>>>>>> d3ed8affe99e30e9c65390e3cd6b82b9b4178bbd[m
        <button[m
          mat-raised-button[m
          color="primary"[m
          type="submit"[m
[32m++<<<<<<< HEAD[m
[32m +        [disabled]="form.invalid"[m
[32m++=======[m
[32m+         [disabled]="form.invalid || form.untouched"[m
[32m++>>>>>>> d3ed8affe99e30e9c65390e3cd6b82b9b4178bbd[m
        >[m
          Submit[m
        </button>[m
