import { combineReducers } from 'redux';
import { casinoReducer } from './casino/reducer';
import { CasinoState } from './casino/types';
import { profileReducer } from './profile/reducer';
import { ProfileState } from './profile/types';

export interface ApplicationState {
  profile: ProfileState;
  casino: CasinoState;
}

export const rootReducer = combineReducers<ApplicationState>({
  profile: profileReducer,
  casino: casinoReducer
});
