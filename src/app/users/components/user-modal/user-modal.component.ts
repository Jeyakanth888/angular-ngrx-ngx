import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import form_template from '../../../models/add-form';

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
  formTemplate: any = form_template;
  myFormGroup: FormGroup;
  @Input() addFormType: string;
  constructor(public modalService: BsModalService) { }

  ngOnInit() {
    let group = {};
    
    form_template.forEach(input_template => {
      group[input_template.label] = new FormControl('');
    })
    this.myFormGroup = new FormGroup(group);
  }


  // openModal() {
  //   this.modalRef = this.modalService.show(this.template, this.config);
  // }

}
