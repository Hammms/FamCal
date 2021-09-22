import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Day } from '../day';
import { map } from 'rxjs/operators';




@Injectable({providedIn: 'root'})
export class DayService {
  
  private days: Day[] = [];
  private daysUpdated = new Subject<Day[]>();

  constructor(private http: HttpClient) {}
  
  getDays() {
     this.http.get<{ message: string; day: any}>('http://localhost:3000/test')
     .pipe(map((dayData) => {
       return dayData.day.map(day => {
         return {
           dates: day.dates
         };
       });
     }))
     .subscribe(transformedDates => {
      this.days = transformedDates;
      this.daysUpdated.next([...this.days]);
     });
     
  }

  getDaysUpdatedListener() {
    return this.daysUpdated.asObservable();
  }

  // addDays(dates: number) {
  //   const day: Day = { dates: dates};
  //   this.days.push(day);
  //   this.daysUpdated.next([...this.days]);
  // }

}

// Observable<Day[]>

// Create a service 
// import the object and object structure 