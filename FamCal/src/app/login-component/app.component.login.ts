import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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
        email: ['',
        [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      })
    }
  
    ngOnInit() { }
  
    checkvalidemail() {
      this.authService.checkemail(this.signinForm.value).subscribe((res) => {
        console.log(res.message)
        if(res.message == null)
        {
           return alert("Invalid Email")
        }
      })
    }

 
    loginUser() {
      this.checkvalidemail();
      if (this.signinForm.invalid) {
        return alert('Please use a valid email or password');
      }
      

      this.authService.signIn(this.signinForm.value);
    }
  }