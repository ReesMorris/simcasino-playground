import { ProfileActionTypes } from './types';
import { Action, Dispatch } from 'redux';
import { IProfile } from '../../models/profile';
import { AppThunk } from '../store';

export const test: AppThunk = (profile: IProfile) => (
  dispatch: Dispatch
): Action => {
  return dispatch({
    type: ProfileActionTypes.SET_PROFILE,
    payload: profile
  });
};
