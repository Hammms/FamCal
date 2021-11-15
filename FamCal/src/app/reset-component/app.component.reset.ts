import { Component, OnInit } from '@angular/core';
import { Injectable, Type } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
    selector: 'app-reset',
    templateUrl: './app.component.reset.html',
    styleUrls: ['./app.component.reset.css']
    
})

export class ResetComponent implements OnInit{
  finalresetform: FormGroup;
  constructor(
    public authService: AuthService,
    public router: Router,
    private route: ActivatedRoute,
    public fb: FormBuilder
  ) {
    this.finalresetform = this.fb.group({
      resettoken: [this.route.snapshot.params.token],
       newpass1: ['',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
       newpass2: ['',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
    }) 
    
  }

  ngOnInit() {
    this.checkSetToken();
    
  }

  checkSetToken(){
    var token = {token: this.route.snapshot.params.token}
      this.authService.checkSetToken(token).subscribe((res) =>{
        //console.log(res)
        if( res.message == false)
        {
          alert("invalid reset link please make sure this is the most current link that was sent")
          this.router.navigate(['login'])
        }
      })
  };


  resetPassword(finalrestform) {
    console.log(this.finalresetform)
    if (this.finalresetform.invalid) {
      return alert('Password critera has not been met');
    }
    if(finalrestform.newpass1 !== finalrestform.newpass2  )
    {
      return alert("Password do not match! Please try again.")
    }
    this.authService.emailRest(this.finalresetform.value).subscribe((res) => {
      //console.log(res); 
    })
    
    
  }
}

  