import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './app.component.register.html',
    styleUrls: ['./app.component.register.css']
})

export class RegisterComponent implements OnInit {
    signupForm: FormGroup;
  
    constructor(
      public fb: FormBuilder,
      public authService: AuthService,
      public router: Router
    ) {
      this.signupForm = this.fb.group({
        name: [''],
        email: [''],
        password: ['']
      })
    }
  
    ngOnInit() { }
  
    registerUser() {
      this.authService.signUp(this.signupForm.value).subscribe((res) => {
        if (res.result) {
          this.signupForm.reset()
          this.router.navigate(['login']);
        }
      })
    }
  }