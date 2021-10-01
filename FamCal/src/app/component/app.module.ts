//Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//Angular Materials
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from "@angular/material/card"
import { MatButtonModule } from "@angular/material/button"
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatExpansionModule } from "@angular/material/expansion"
//BootStrap Modules can more than likely be removed 
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
import { ProfileComponent } from '../profile-component/app.component.profile';
// Services and Interceptors 
import { AuthInterceptor } from '../Services/authconfig.interceptor';
import { AuthGuard } from '../Services/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: 'full' },
  {path:'test', component:HeaderComponent},
  {path:'login', component: LoginComponent},
  {path:'forgot', component:ForgotComponent},
  {path:'register', component: RegisterComponent},
  {path:'header', component: HeaderComponent},
  {path:'app', component: CalendarComponent, canActivate: [AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate: [AuthGuard]}
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
    HeaderComponent,
    ProfileComponent
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
    MatExpansionModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
