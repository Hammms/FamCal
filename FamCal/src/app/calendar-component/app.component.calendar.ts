import { Component } from '@angular/core';
import { DayService } from '../Services/day.service';
import { Day } from '../day';

@Component({
    selector: 'app-calendar',
    templateUrl: './app.component.calendar.html',
    styleUrls: ['./app.component.calendar.css']
  })

  export class CalendarComponent {
    constructor(private DayService: DayService) {}
    ngOnInit(): void {
      this.getDays();
  }

  days: Day[] = []
  getDays(): void {
      // this.DayService.getDays().subscribe(days => this.days = days)
  }

  }


