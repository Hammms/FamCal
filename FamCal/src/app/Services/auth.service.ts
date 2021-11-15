import { Injectable } from '@angular/core';
import { User } from '../user';
import { finalreset } from '../finalreset';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})

export class AuthService {
  endpoint: string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(
    private http: HttpClient,
    public router: Router
  ) {
  }

  checkSetToken(resettoken): Observable<any> {
    //console.log(resettoken)
    return this.http.post(`${this.endpoint}/checksettoken`, resettoken)
  }

  checkemail(user: User): Observable<any> {
  return this.http.post(`${this.endpoint}/checkemail`, user)
  }

  emailRest(resetpayload: finalreset): Observable<any> {
    if(resetpayload.newpass1 != resetpayload.newpass2){
      alert("Passwords do not match")
      return
    }
    return this.http.post(`${this.endpoint}/emailreset`, resetpayload)
    // this.router.navigate(['app'])
  }

  // Sign-up
  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}/register-user`;
    return this.http.post(api, user)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Sign-in
  // need to hash request payload currently sending it as plain text 
  signIn(user: User) {
    return this.http.post<any>(`${this.endpoint}/signin`, user)
      .subscribe((res: any) => {
        
        localStorage.setItem('access_token', res.token)
        // Attempting to setup a profile page, not working put on back burner 
        // this.getUserProfile(res._id).subscribe((res) => {
        //   this.currentUser = res;
        //   this.router.navigate(['profile' + res.msg._id]);
        // })
        this.router.navigate(['app'])
      })
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }

  // User profile currently not setup 
  getUserProfile(id: string): Observable<any> {
    let api = `${this.endpoint}/profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  // init reset process and send email to user 
reset(user: User) {
    return this.http.post<any>(`${this.endpoint}/reset`, user)
      .subscribe((res: any) => {
        
        this.router.navigate(['login'])
      })
  }

  //handle password reset from email
  requestReset(body): Observable<any> {
    return this.http.post(`${this.endpoint}/response-reset-password`, body)
      
  }

  
  // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}






