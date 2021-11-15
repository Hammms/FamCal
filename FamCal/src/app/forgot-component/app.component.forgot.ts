import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-forgot',
    templateUrl: './app.component.forgot.html',
    styleUrls: ['./app.component.forgot.css']
})

export class ForgotComponent{
    resetForm: FormGroup;

    constructor(
      public fb: FormBuilder,
      public authService: AuthService,
      public router: Router
    ) {
      this.resetForm = this.fb.group({
        email: ['',
        [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      })
    }

    ngOnInit() { }
  
    checkvalidemail() {
      this.authService.checkemail(this.resetForm.value).subscribe((res) => {
        console.log(res.message)
        if(res.message == null)
        {
           return alert("Invalid Email")
        }
        if (this.resetForm.invalid) {
          return alert('Please enter a valid email address');
        } 
      })
    }


    reset() {
      this.checkvalidemail()
     
        this.authService.reset(this.resetForm.value)
    }



}