import { Component } from "@angular/core";



@Component({
    selector: 'app-login',
    templateUrl: './app.component.login.html',
    styleUrls: ['./app.component.login.css']
})

export class LoginComponent{
    constructor() {}
    ngOnInit(): void {
        
    }
   

    // showConfig() {
    //     this.configService.getConfig()
    //       // clone the data object, using its known Config shape
    //       .subscribe((data: Config) => this.config = { ...data });
    //   }
   
}