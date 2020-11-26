import { ProfileActionTypes } from './types';
import { AppThunk } from '../store';

export const setProfile: AppThunk = (profileFile: string) => dispatch => {
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

export const updateCash: AppThunk = (amount: string) => (
  dispatch,
  getState
) => {
  dispatch({
    type: ProfileActionTypes.SET_PROFILE,
    payload: { ...getState().profile.data, Cash: amount }
  });
};

export const updateSetting: AppThunk = (
  settingName: string,
  settingValue: boolean
) => (dispatch, getState) => {
  console.log(settingName, settingValue);
  dispatch({
    type: ProfileActionTypes.SET_PROFILE,
    payload: { ...getState().profile.data, [settingName]: settingValue }
  });
};
