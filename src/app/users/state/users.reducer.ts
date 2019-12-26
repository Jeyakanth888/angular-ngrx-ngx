import { Action, createReducer, createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import * as fromRoot from "../../state/";
import { User } from 'src/app/models/user.model';
import * as UsersAction  from './users.actions';


export interface UserState extends EntityState<User> {
  selectedUserId: number | null,
  loading: boolean,
  loaded: boolean,
  error:string
}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<
  User
>();

export const defaultUser: UserState = {
  ids: [],
  entities: {},
  selectedUserId: null,
  loading: false,
  loaded: false,
  error: ""
};

export interface AppState extends fromRoot.State {
    users: UserState
}

export const initialState = userAdapter.getInitialState(defaultUser);

// const usersReducer = createReducer(
//   initialState,
// );

export function userReducer(state: UserState = initialState, action: UsersAction.allAction):UserState {
  switch (action.type) {
    case UsersAction.UsersActionTypes.LOAD_ALL_USERS_SUCCESS: {
      return userAdapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
    }
    case UsersAction.UsersActionTypes.LOAD_ALL_USERS_FAIL: {
      return {
        ...state,
        entities:{},
        loading: false,
        loaded: false
      }
    };
    default: {
      return state;
    }
  }
  // return usersReducer(state, action);
}
const getUserFeatureState = createFeatureSelector<UserState>(
  "users"
);

export const getUsers = createSelector(
  getUserFeatureState,
  userAdapter.getSelectors().selectAll
);


