import { Component } from '@angular/core';
// defines how you are calling the componenet and its associations with HTMl and CSS
@Component({
    selector: 'app-calendar',
    templateUrl: './app.component.calendar.html',
    styleUrls: ['./app.component.calendar.css']
  })

  export class CalendarComponent {
      // write the code that genereates HTML for the table based on the month
      // constructor that takes in current date to determine where to start the calendar 
      // write code that genereates the calendar based off of the days in the month 
      //for now lets make it a static 30 for simplicity 
      constructor() {
          var n = new Date();
          var m = String(n.getMonth());
          console.log(m);
      }

   
    ngOnInit(): void {
    }

      // create a for loop that runs through 30 times and also has a tracker for every 7 times to create a new row 
      

  }


/* 
<div class="table-wrap">
<table class="table table-bordered text-center">
   <thead>
    <tr>
    <th>Monday</th>
    <th>Tuesday</th>
    <th>Wednesday</th>
    <th>Thursday</th>
    <th>Friday</th>
    <th>Saturday</th>
    <th>Sunday</th>
    </tr>
    </thead>
    <tbody>
    this is where the code is going to genereate based on a value of how 
    many days are in the month.
    it can only genreate 7 per row
    </tbody>


</table>
</div>

*/