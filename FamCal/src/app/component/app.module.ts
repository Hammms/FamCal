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
import { MatDialogModule } from '@angular/material/dialog';
//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from '../header-component/app.component.header';
import { LoginComponent } from '../login-component/app.component.login';
import { RegisterComponent } from '../register-component/app.component.register';
import { ForgotComponent } from '../forgot-component/app.component.forgot';
import { ProfileComponent } from '../profile-component/app.component.profile';
import { ResetComponent } from '../reset-component/app.component.reset';
import { FullcalComponent} from '../fullcal-component/app.component.fullcal';
import { NgbdModalBasic } from '../fullcal-component/modal-content/app.component.mconent';
// Services and Interceptors 
import { AuthInterceptor } from '../Services/authconfig.interceptor';
import { AuthGuard } from '../Services/auth.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//Full Calendar
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: 'full' },
  {path:'test', component:HeaderComponent},
  {path:'login', component: LoginComponent},
  {path:'forgot', component:ForgotComponent},
  {path:'register', component: RegisterComponent},
  {path:'header', component: HeaderComponent},
  
  {path:'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'response-reset-password/:token',component: ResetComponent},
  {path: 'cal', component: FullcalComponent, canActivate: [AuthGuard]}
];

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    ForgotComponent,
    RegisterComponent,
    HeaderComponent,
    ProfileComponent,
    ResetComponent,
    FullcalComponent,
    NgbdModalBasic
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FullCalendarModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    NgbModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
