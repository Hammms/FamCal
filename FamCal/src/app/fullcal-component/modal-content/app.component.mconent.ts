import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FamCalService } from 'src/app/Services/famcal.service';
import { findEndOfBlock } from '@angular/localize/src/utils';

@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './app.component.mcontent.html',
  styleUrls: ['./app.component.mcontent.css']
  
})

export class NgbdModalBasic {
  public FamService: FamCalService 
  closeResult: string;
  @Output() eventForm: FormGroup;
  @ViewChild("content") public modalContent: NgbModal
  @Output() eventFormOutput = new EventEmitter<any>();
  
  constructor( private modalService: NgbModal, public fb: FormBuilder ) 
  {
    this.eventForm = this.fb.group({
    title: ['',[Validators.required]],
    start: ['',[Validators.required]],
    end: ['',[Validators.required]],
    desc: ['',[Validators.maxLength(2)]]
    })
  }

  showModal(info) {
    console.log(info.title)
    this.eventForm.reset();
    if(info.extendedProps === undefined)
    {
      this.eventForm.patchValue({
        title: info.title,
        start: JSON.stringify(info.start).replace(/['"]+/g, '').substring(0,10),
        end: JSON.stringify(info.end).replace(/['"]+/g, '').substring(0,10),
        })
    } else {
      this.eventForm.patchValue({
        title: info.title,
        start: JSON.stringify(info.start).replace(/['"]+/g, '').substring(0,10),
        end: JSON.stringify(info.end).replace(/['"]+/g, '').substring(0,10),
        desc: info.extendedProps.description
        })
    }
    
    this.eventForm.patchValue({
    title: info.title,
    start: JSON.stringify(info.start).replace(/['"]+/g, '').substring(0,10),
    end: JSON.stringify(info.end).replace(/['"]+/g, '').substring(0,10),
    })
    this.modalService.open(this.modalContent)
  }

  pushModalData(output: Object) {
   //this.modalService.open(this.modalContent)
   this.eventFormOutput.emit(output)
   this.modalService.dismissAll()
  }


  // hanging onto this code for now 
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }
}