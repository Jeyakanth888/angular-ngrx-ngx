import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {
  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: false
  };
  template: TemplateRef<any>

  constructor(public modalService: BsModalService) { }

  ngOnInit() {
 
  }

  // openModal() {
  //   this.modalRef = this.modalService.show(this.template, this.config);
  // }

}
