import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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
        email: ['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password: ['',[Validators.required, Validators.minLength(6), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
      })
    }
  
    ngOnInit() { }
    
    checkvalidemail() {
      this.authService.checkemail(this.signupForm.value).subscribe((res) => {
        //console.log(res.message)
        if(res.message == true)
        {
           return alert("email is already in use")
        }
      })
    }


    registerUser() {
      if (this.signupForm.invalid) {
        return alert('Please use a valid email or password');
      }
      
      this.checkvalidemail()
      this.authService.signUp(this.signupForm.value).subscribe((res) => {
        console.log(res)
        if (res.result) {
          this.signupForm.reset()
          this.router.navigate(['login']);
        }
      })
    }
  } 