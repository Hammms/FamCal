import { Injectable } from '@angular/core';
import { Event } from '../event';
import { finalreset } from '../finalreset';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})

  export class FamCalService {

    constructor(
      private http: HttpClient,
      public router: Router
    ) {
    }
      //class called into full-cal component for handling requests to calendar api 
      endpoint: string = 'http://localhost:3000/api';
      headers = new HttpHeaders().set('Content-Type', 'application/json');

      // add event call 
      // edit event call
      //delete event call 
      //load data on page load

    addEvent(event: Event): Observable<any>{
      console.log(event)
      return this.http.post(`${this.endpoint}/add`, event)
    }

    deleteEvent(eventId: String): Observable<any> {
      console.log(eventId)
      var turboo = {"eventId":eventId}
      return this.http.post(`${this.endpoint}/delete`, turboo)
    }

    editEvent(event: Event): Observable<any>{
      //also send over the event id so it knows what event to edit 

      console.log(event)
      
      return this.http.post(`${this.endpoint}/edit`, event)
    }





  }