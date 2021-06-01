import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  login(event: Event) : void {
    // Evita que la página recargue cuando realiza submit
    event.preventDefault();
    if (this.formLogin.valid) {
      this.router.navigate(['admin']);
    }
  }

  private createForm(): void {
    this.formLogin = this.formBuilder.group({
      usuario: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }


}
