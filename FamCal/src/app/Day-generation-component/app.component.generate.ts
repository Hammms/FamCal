import { Component, OnInit } from "@angular/core";
import { DayService } from '../Services/day.service';
import { Day } from '../day';


@Component({
    selector: 'tbody[app-generate]',
    templateUrl: './app.component.generate.html',
    styleUrls: ['./app.component.generate.css']
})

export class GenerateComponent{
    constructor(private DayService: DayService) {}
    ngOnInit(): void {
      this.getDays();
  }

  days: Day[] = []
  getDays(): void {
    //   this.DayService.getDays().subscribe(days => this.days = days)
  }

  }