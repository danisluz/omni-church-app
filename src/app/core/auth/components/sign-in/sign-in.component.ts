import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;

  constructor( private formBuilder: FormBuilder) {  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group( {
      userName: ["", Validators.required ],
      password: ["", Validators.required ]
    });
    console.log(this.loginForm)
  }
}
