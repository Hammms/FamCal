import { Component, ViewChild, TemplateRef, Output, EventEmitter, Input, ElementRef } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { setupTestingRouter } from '@angular/router/testing';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './app.component.mcontent.html'
  
})
export class NgbdModalBasic {
  closeResult: string;
  @Output() eventForm: FormGroup;
  @ViewChild("content") public modalContent: NgbModal
  @Output() eventFormOutput = new EventEmitter<any>();
  
  constructor
  (
    private modalService: NgbModal,
    public fb: FormBuilder
  ) {
      this.eventForm = this.fb.group({
      title: ['',[Validators.required]],
      start: ['',[Validators.required]],
      end: ['',[Validators.required]],
      desc: [''] 
    })
  }



//when the modal is called pass that information into a object on component.login.ts

  showModal(info) {
    //console.log(JSON.stringify(info.start).replace(/['"]+/g, '').substring(0,10))
    this.eventForm.reset();
    //console.log(info)
    this.eventForm.patchValue({
    start: JSON.stringify(info.start).replace(/['"]+/g, '').substring(0,10),
    end: JSON.stringify(info.end).replace(/['"]+/g, '').substring(0,10),
    
  })
  this.modalService.open(this.modalContent)

    
    
    //this.modalService.dismissAll()
  }

  parsedates(dates)
  {

  }


  pushModalData(output: Object) {
   //this.modalService.open(this.modalContent)
   this.eventFormOutput.emit(output)
   this.modalService.dismissAll()
  }
  



  

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}