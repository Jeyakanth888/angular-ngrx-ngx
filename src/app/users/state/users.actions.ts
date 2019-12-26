import { createAction, Action, props } from '@ngrx/store';
import { User } from "../../models/user.model";

export enum UsersActionTypes {
  LOAD_ALL_USERS = "[User] Load Users",
  LOAD_ALL_USERS_SUCCESS = "[User] Load Users Success",
  LOAD_ALL_USERS_FAIL = "[User] Load Users Fail",
}

export class LoadUsers implements Action {
  readonly type = UsersActionTypes.LOAD_ALL_USERS;
}

export class LoadUsersSuccess implements Action {
  readonly type = UsersActionTypes.LOAD_ALL_USERS_SUCCESS;
  constructor(public payload: User) {}
}

export class LoadUsersFail implements Action {
  readonly type = UsersActionTypes.LOAD_ALL_USERS_FAIL;
  constructor(public payload: string) {}
}


export type allAction =  
 | LoadUsers 
 | LoadUsersSuccess 
 | LoadUsersFail;


