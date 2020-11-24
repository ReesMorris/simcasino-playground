import { combineReducers } from 'redux';
import { profileReducer } from './profile/reducer';
import { ProfileState } from './profile/types';

export interface ApplicationState {
  profile: ProfileState;
}

export const rootReducer = combineReducers<ApplicationState>({
  profile: profileReducer
});
