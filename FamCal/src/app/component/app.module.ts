//Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//Angular Materials
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from "@angular/material/card"
import { MatButtonModule } from "@angular/material/button"
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatExpansionModule } from "@angular/material/expansion"
//BootStrap Modules
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CollapseModule } from 'ngx-bootstrap/collapse';
//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from '../header-component/app.component.header';
import { CalendarComponent } from '../calendar-component/app.component.calendar';
import { LoginComponent } from '../login-component/app.component.login';
import { RegisterComponent } from '../register-component/app.component.register';
import { ForgotComponent } from '../forgot-component/app.component.forgot';
import { ReuseComponent } from '../Reuseable-form-component/app.component.reuse';
import { GenerateComponent } from '../Day-generation-component/app.component.generate';

const routes: Routes = [
  {path:'', redirectTo:'test', pathMatch: 'full' },
  {path:'test', component:HeaderComponent},
  {path:'login', component: LoginComponent},
  {path:'forgot', component:ForgotComponent},
  {path:'register', component: RegisterComponent},
  {path:'app', component: CalendarComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalendarComponent,
    GenerateComponent,
    ReuseComponent,
    ForgotComponent,
    RegisterComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    TooltipModule.forRoot(),
    CollapseModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
