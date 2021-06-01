import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  formRegistro: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  registrar(event: Event): void {
    event.preventDefault();
    if (this.formRegistro.valid) {
      console.log('Usuario registrado correctamente...');
      this.router.navigate(['login']);
    }
  }
  
  private createForm(): void {
    this.formRegistro = this.formBuilder.group({
      nombre: [null, [Validators.required, Validators.minLength(3)]],
      usuario: [null, [Validators.required, Validators.minLength(3)]],
      password: [null, [Validators.required, Validators.minLength(3)]],
    });
  }


}
