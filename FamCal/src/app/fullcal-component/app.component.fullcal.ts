import { Component, Input,ViewChild } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi, FullCalendarComponent } from '@fullcalendar/angular';
import { Calendar } from '@fullcalendar/core'; // include this line
import googleCalendarPlugin from "@fullcalendar/google-calendar"
import { NgbdModalBasic } from './modal-content/app.component.mconent';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FamCalService } from '../Services/famcal.service';
import { HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-fullcal',
    templateUrl: './app.component.fullcal.html',
    styleUrls: ['./app.component.fullcal.css']
})

export class FullcalComponent{
  //define some basic variables 
  hideSideBar = true
  public callmodal: NgbdModalBasic;
  calendarVisible = true;
  eventForm: FormGroup
  public currentId
  
  constructor(public FamService: FamCalService, public fb: FormBuilder, private http: HttpClient){

    const name = Calendar.name; 
    this.eventForm = this.fb.group({
      title: ['',[Validators.required]],
      start: ['',[Validators.required]],
      end: ['',[Validators.required]],
      description: [''] 
    })
    
  }
  //Calendar Options and load
  calendarOptions: CalendarOptions = {
    plugins: [googleCalendarPlugin],
    googleCalendarApiKey: 'AIzaSyBrn22dEEYNgGZoCXHDlJxrsRbF40ORnYU',
    events: {
      googleCalendarId:'dvikj4l5pb4ur77ch7js2fb0ug@group.calendar.google.com'
    },
    eventColor: '#5687e9',
    eventBorderColor: '#5687e9',
    headerToolbar: {
      left: 'prev today',
      center: 'title',
      right: 'next'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    
  };
  // directives 
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
    info.end = info.start
    //console.log(info)
    this.ModalContent.showModal(info)
    this.currentId = null
  }
  
  handleEventClick(clickInfo: EventClickArg) {
    clickInfo.jsEvent.preventDefault()
    this.hideSideBar = false
    this.currentId = clickInfo.event.id
    //console.log(clickInfo.event)
    this.eventInfoTitle = JSON.stringify(clickInfo.event.title).replace(/['"]+/g, '')
    this.eventInfoStart = JSON.stringify(clickInfo.event.start).replace(/['"]+/g, '').slice(0,10)
    if (clickInfo.event.end === null)
    {
      this.eventInfoEnd = JSON.stringify(clickInfo.event.start).replace(/['"]+/g, '').slice(0,10)
    }else this.eventInfoEnd = JSON.stringify(clickInfo.event.end).replace(/['"]+/g, '').slice(0,10)
    this.eventInfoDesc = JSON.stringify(clickInfo.event.extendedProps.description).replace(/['"]+/g, '')
    //this.calendarComponent.getApi().refetchEvents()
    //this.calendarComponent.getApi().getCurrentData()
  }
  
  handleEventDelete()
  {
    //Call service to api to delete event
    this.FamService.deleteEvent(this.currentId).subscribe((res) => {
      console.log(res)
    })
    //console.log(this.currentId)
    let calendarApi = this.calendarComponent.getApi();
    var deleteEvent = calendarApi.getEventById(this.currentId)
    deleteEvent.remove()
    this.hideSideBar = true
  }

  pushModalData(output) {
    var testing = this.checkModalData(output)
    console.log(output)
    if (testing == true)
    {
      return 
    }  
    //determine if the event is existing or not and handle accordingly 
    if(this.currentId == null)
    {
      this.FamService.addEvent(output).subscribe((res) => {
        console.log(res)
        this.calendarComponent.getApi().refetchEvents()
        this.calendarComponent.getApi().getCurrentData()
      })
    } else {
      output.eventId = this.currentId
      this.FamService.editEvent(output).subscribe((res) => {
        console.log(res)
        this.calendarComponent.getApi().refetchEvents()
        this.calendarComponent.getApi().getCurrentData()
      })
    }
  
  }

  editEventData(){
    //handle edit click
    let calendarApi = this.calendarComponent.getApi();
    var modalInput = calendarApi.getEventById(this.currentId)
    //console.log(modalInput)
    this.ModalContent.showModal(modalInput)
  }

  checkModalData(output){ 
    //validate data in form 
    let calendarApi = this.calendarComponent.getApi();
    if(parseInt(JSON.stringify(output.end).replace(/[-"]/g, '')) < parseInt(JSON.stringify(output.start).replace(/[-"]/g, ''))){
      alert('Please make sure that your dates are valid.')
      return true
    } 
    //check for a title
    if(JSON.stringify(output.title).replace(/\s/g, '') === 'null' || 
        JSON.stringify(output.title).replace(/^[ '"]+|[ '"]+$|( ){2,}/g,'$1').length === 0)
    {
      alert("please enter a title for your event.")
      return true
    }
    //check is data already exists if so delete it
    if(calendarApi.getEventById(this.currentId))
    {
      var deleteEvent = calendarApi.getEventById(this.currentId)
      deleteEvent.remove()
      this.hideSideBar = true
    } else console.log(false)
  }
}

