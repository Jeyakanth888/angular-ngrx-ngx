import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as userActions from '../../state/users.actions'
import { User } from 'src/app/models/user.model';
import { Observable } from 'rxjs'
import * as fromUser from "../../state/users.reducer";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { UserModalComponent } from '../user-modal/user-modal.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: false
  };

  constructor(private store: Store<fromUser.AppState>, private modalService: BsModalService) { }
  users$: Observable<User[]>;
  showModal: boolean = false;
  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.store.dispatch(new userActions.LoadUsers());
    this.users$ = this.store.pipe(select(fromUser.getUsers));
  }


  // openModal() {
  //   this.showModal = true;
  //   this.modalRef = this.modalService.show(this.elementView, this.config);
  // }

  openModal() {
    this.modalRef = this.modalService.show(UserModalComponent, {
      initialState: {
        title: 'Modal title',
        data: {}
      },
      backdrop: true,
      ignoreBackdropClick: false
    });
  }

}
