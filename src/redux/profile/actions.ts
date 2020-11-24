import { ProfileActionTypes } from './types';
import { Action, Dispatch } from 'redux';
import { AppThunk } from '../store';

export const setProfile: AppThunk = (profileFile: string) => (
  dispatch: Dispatch
): Action => {
  try {
    if (profileFile.substr(0, 5) === 'ERROR')
      throw new Error(profileFile.substring(6, profileFile.length));

    return dispatch({
      type: ProfileActionTypes.SET_PROFILE,
      payload: JSON.parse(profileFile)
    });
  } catch (err) {
    return dispatch({
      type: ProfileActionTypes.SET_PROFILE_ERROR,
      payload: err.message
    });
  }
};
