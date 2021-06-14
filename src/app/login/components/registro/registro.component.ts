import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  formRegistro: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  registrar(event: Event): void {
    event.preventDefault();
    if (this.formRegistro.valid) {
      const value = this.formRegistro.value;
      this.authService.createUser(value.email, value.password).then(() => {
        this.router.navigate(['login']);
        console.log('Usuario registrado correctamente...');
      });
    }
  }

  private createForm(): void {
    this.formRegistro = this.formBuilder.group({
      nombre: [null, [Validators.required, Validators.minLength(3)]],
      email: [
        null,
        [Validators.required, Validators.minLength(3), Validators.email],
      ],
      password: [null, [Validators.required, Validators.minLength(3)]],
    });
  }
}
