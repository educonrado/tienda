import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  login(event: Event): void {
    // Evita que la página recargue cuando realiza submit
    event.preventDefault();
    if (this.formLogin.valid) {
      const value = this.formLogin.value;
      this.authService
        .login(value.email, value.password)
        .then(() => {
          this.router.navigate(['admin/dashboard']);
        })
        .catch(() => {
          alert('No es válido');
        });
    }
  }

  private createForm(): void {
    this.formLogin = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }
}
