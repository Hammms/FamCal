import { Component, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi, FullCalendarComponent } from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import { NgbdModalBasic } from './modal-content/app.component.mconent';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-fullcal',
    templateUrl: './app.component.fullcal.html',
    styleUrls: ['./app.component.fullcal.css']
})

export class FullcalComponent{
  hideSideBar = true
  //private modalService: NgbModal;
  public callmodal: NgbdModalBasic;
  calendarVisible = true;
  eventForm: FormGroup
  public currentId
  
  constructor( public fb: FormBuilder){
    this.eventForm = this.fb.group({
      title: ['',[Validators.required]],
      start: ['',[Validators.required]],
      end: ['',[Validators.required]],
      desc: [''] 
    })
  }
  //Calendar Options and load
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev today',
      center: 'title',
      right: 'next'
    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };

  @ViewChild(NgbdModalBasic) public ModalContent:NgbdModalBasic;
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;
  @ViewChild('eventData') eventData: FullCalendarComponent;
  @Input() eventInfoTitle: string;
  @Input() eventInfoStart: string;
  @Input() eventInfoEnd: string;
  @Input() eventInfoDesc: string;
  currentEvents: EventApi[] = [];


  handleDateSelect(selectInfo: DateSelectArg) {
    var info = selectInfo
    this.ModalContent.showModal(info)
  }

  handleEventClick(clickInfo: EventClickArg) {
    this.hideSideBar = false
    console.log(clickInfo.event.id)
    this.currentId = clickInfo.event.id
    this.eventInfoTitle = JSON.stringify(clickInfo.event.title).replace(/['"]+/g, '')
    this.eventInfoStart = JSON.stringify(clickInfo.event.start).replace(/['"]+/g, '').slice(0,10)
    this.eventInfoEnd = JSON.stringify(clickInfo.event.end).replace(/['"]+/g, '').slice(0,10)
    this.eventInfoDesc = JSON.stringify(clickInfo.event.extendedProps.desc).replace(/['"]+/g, '')
    
  }
  
  handleEventDelete()
  {
    this.calendarOptions.eventDrop
    console.log(this.currentId)
    let calendarApi = this.calendarComponent.getApi();
    var deleteEvent = calendarApi.getEventById(this.currentId)
    deleteEvent.remove()
    console.log(deleteEvent)
    
    //calendarApi.
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;

    
  }

  pushModalData(output) {
    var testing = this.checkModalData(output)
    //console.log(output)
    if (testing == true)
    {
      return 
    } 
    
    let calendarApi = this.calendarComponent.getApi();
    //output.start = output.start + "05T:00:00.000Z"
    //console.log(output.start)
    calendarApi.addEvent({
      id: createEventId(),
      title: output.title,
      start: output.start,
      end: output.end,
      allDay: true,
      desc: output.desc
    });
  }

  checkModalData(output){ 
    if(parseInt(JSON.stringify(output.end).replace(/[-"]/g, '')) < parseInt(JSON.stringify(output.start).replace(/[-"]/g, ''))){
      alert('Please make sure that your dates are valid.')
      return true
    } 

    if(JSON.stringify(output.title).replace(/\s/g, '') === 'null' || 
        JSON.stringify(output.title).replace(/^[ '"]+|[ '"]+$|( ){2,}/g,'$1').length === 0)
    {
      alert("please enter a title for your event.")
      return true
    }
  }
}


// handleCalendarToggle() {
  //   this.calendarVisible = !this.calendarVisible;
  // }

  // handleWeekendsToggle() {
  //   const { calendarOptions } = this;
  //   calendarOptions.weekends = !calendarOptions.weekends;
  // }


  

    
     



