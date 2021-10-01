import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';



@Component({
    selector: 'app-login',
    templateUrl: './app.component.login.html',
    styleUrls: ['./app.component.login.css']
})

export class LoginComponent{
    signinForm: FormGroup;

    constructor(
      public fb: FormBuilder,
      public authService: AuthService,
      public router: Router
    ) {
      this.signinForm = this.fb.group({
        email: [''],
        password: ['']
      })
    }
  
    ngOnInit() { }
  
    loginUser() {
      this.authService.signIn(this.signinForm.value)
    }
  }