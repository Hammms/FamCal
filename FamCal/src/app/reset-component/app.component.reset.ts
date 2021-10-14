import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
    selector: 'app-reset',
    templateUrl: './app.component.reset.html',
    
})

export class ResetComponent implements OnInit{
  finalresetform: FormGroup;
  constructor(
    public authService: AuthService,
    public router: Router,
    private route: ActivatedRoute,
    public fb: FormBuilder
  ) 
  
  {
    this.finalresetform = this.fb.group({
      resettoken: [this.route.snapshot.params.token],
       newpass1: [''],
       newpass2: ['']
    })
  }

  ngOnInit() {
    
    localStorage.setItem('access_token', this.route.snapshot.params.token)
  }


  

  verifyToken() {
   
    this.authService.ValidPasswordToken(this.finalresetform.value).subscribe((res) => {
      //console.log(res);
    })
    
  }



  // ResponseResetForm: FormGroup;
  
  // constructor(
  //   public fb: FormBuilder,
  //   public authService: AuthService,
  //   public router: Router
  // ) {
  //   this.ResponseResetForm = this.fb.group({
  //     resetToken: [this.resetTOken]
  //   })
  // }


    
  //   //    this.route.params.subscribe(params => {
  //   //   this.resetToken = params.token;
  //   //   console.log(this.resetToken);
  //   // });  
  //   // this.authService.ValidPasswordToken({ resetToken :this.resetToken}).subscribe((res) => {
  //   //   console.log(res)
  
        
        
  //     //);
      
  //     //console.log(this.CurrentState)
  //   }
     



  // VerifyToken() {
  //   this.route.params.subscribe(params => {
  //     this.resetToken = params.token;
  //     console.log(this.resetToken);
  //   });  
  //   this.authService.ValidPasswordToken({ resetToken :this.resetToken}).subscribe(
  //       data => {
  //         this.CurrentState = 'Verified';
  //       },
  //       err => {
          
  //         this.CurrentState = 'NotVerified';
  //       }
  //     );
  //     console.log(this.CurrentState)
  //   }

  
    
    //Init(){
      // this.ResponseResetForm = this.fb.group(
      //   {
      //     resettoken: [this.resetToken],
      //     newPassword: ['', [Validators.required, Validators.minLength(4)]],
      //     confirmPassword: ['', [Validators.required, Validators.minLength(4)]]
      //   }
      // );
    //}

  //   Validate(passwordFormGroup: FormGroup) {
  //     const new_password = passwordFormGroup.controls.newPassword.value;
  //     const confirm_password = passwordFormGroup.controls.confirmPassword.value;
  
  //     if (confirm_password.length <= 0) {
  //       return null;
  //     }
  
  //     if (confirm_password !== new_password) {
  //       return {
  //         doesNotMatch: true
  //       };
  //     }
  
  //     return null;
  //   }

    
  // ResetPassword(form) {
  //   console.log(form.get('confirmPassword'));
  //   if (form.valid) {
  //     this.IsResetFormValid = true;
  //     this.authService.newPassword(this.ResponseResetForm.value).subscribe(
  //       data => {
  //         this.ResponseResetForm.reset();
  //         this.successMessage = data.message;
  //         setTimeout(() => {
  //           this.successMessage = null;
  //           this.router.navigate(['sign-in']);
  //         }, 3000);
  //       },
  //       err => {
  //         if (err.error.message) {
  //           this.errorMessage = err.error.message;
  //         }
  //       }
  //     );
  //   } else { this.IsResetFormValid = false; }
  // }
    

    
    
    
    
}















//form i was working with that wasnt working 
  // {
    //   this.resetresponseForm = this.fb.group({
    //     password: ['']
    //   })
    // }




   //information used to grab the token 
      // this.route.queryParams.subscribe(params => {
      //   this.resetToken = params['url'];
      //   console.log(this.route.snapshot.params.token)
      //});