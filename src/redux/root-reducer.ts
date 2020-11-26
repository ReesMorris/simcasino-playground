import { combineReducers } from 'redux';
import { casinoReducer } from './casino/reducer';
import { CasinoState } from './casino/types';
import { profileReducer } from './profile/reducer';
import { ProfileState } from './profile/types';
import { ToastState } from './toast/types';
import { toastReducer } from './toast/reducer';

export interface ApplicationState {
  profile: ProfileState;
  casino: CasinoState;
  toast: ToastState;
}

export const rootReducer = combineReducers<ApplicationState>({
  profile: profileReducer,
  casino: casinoReducer,
  toast: toastReducer
});
