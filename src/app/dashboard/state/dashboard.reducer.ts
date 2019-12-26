import { Action, createReducer, on } from '@ngrx/store';


export const dashboardFeatureKey = 'dashboard';

export interface State {

}

export const initialState: State = {

};

const dashboardReducer = createReducer(
  initialState,

);

export function reducer(state: State | undefined, action: Action) {
  return dashboardReducer(state, action);
}
