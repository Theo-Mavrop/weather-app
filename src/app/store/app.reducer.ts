import { ActionReducerMap } from '@ngrx/store';

import * as fromHome from '../features/home/store/home.reducer';

export interface AppState {
  homePage: fromHome.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  homePage: fromHome.homeReducer
};
