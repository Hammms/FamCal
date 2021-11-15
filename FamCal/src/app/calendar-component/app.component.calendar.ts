import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Day } from '../day';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'app-calendar',
    templateUrl: './app.component.calendar.html',
    styleUrls: ['./app.component.calendar.css']
  })

  export class CalendarComponent {
    EventForm1: FormGroup;
    model: NgbDateStruct;
    constructor(
      public fb: FormBuilder,
      private modalService: NgbModal
      ) {
        this.EventForm1 = this.fb.group({
          event: ['',[Validators.required]],
          startDate:['',[Validators.required]],
          endDate:['',[Validators.required]],
          description:['']
        })
    }
    

    ngOnInit(): void {
      this.getDays();
  }

  days: Day[] = []
  getDays(): void {
      // this.DayService.getDays().subscribe(days => this.days = days)
  }

  openVerticallyCentered(content) {
    console.log(content)
    this.modalService.open(content, { centered: true });
  }

  testing()
  {
    return alert("testing") 
  }

  }


