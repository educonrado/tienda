import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //formLogin: FormControl = new FormControl({});
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  private createForm(): void {
    
  }


}
