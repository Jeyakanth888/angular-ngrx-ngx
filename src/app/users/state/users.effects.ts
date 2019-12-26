import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of, pipe } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import * as UserActions from './users.actions';


@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private UserService: UserService) { }

  @Effect() loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType<UserActions.LoadUsers>(
      UserActions.UsersActionTypes.LOAD_ALL_USERS
    ),
    mergeMap((action: UserActions.LoadUsers) =>
      this.UserService.getAllUsers().pipe(
        map(
          (users: User[]) =>
            new UserActions.LoadUsersSuccess(users)
        ),
        catchError(err => of(new UserActions.LoadUsersFail(err)))
      )
    )
  );

}
