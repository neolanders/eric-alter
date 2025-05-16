import { ActionReducerMap } from '@ngrx/store';
import * as fromLayout from '../core/reducers/layout';

export interface State {
  layout: fromLayout.State;
}

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer
};

export const metaReducers = [];
