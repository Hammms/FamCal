//Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: 'full' },
  {path:'login', component: LoginComponent},
  {path:'forgot', component:ForgotComponent},
  {path:'register', component: RegisterComponent},
  {path:'app', component: CalendarComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReuseComponent,
    ForgotComponent,
    RegisterComponent,
    HeaderComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    TooltipModule.forRoot(),
    CollapseModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
