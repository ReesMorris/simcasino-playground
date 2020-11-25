import { ProfileActionTypes } from './types';
import { AppThunk } from '../store';

export const setProfile: AppThunk = (profileFile: string) => async dispatch => {
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

export const updateCash: AppThunk = (amount: string) => async (
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
) => async (dispatch, getState) => {
  console.log(settingName, settingValue);
  dispatch({
    type: ProfileActionTypes.SET_PROFILE,
    payload: { ...getState().profile.data, [settingName]: settingValue }
  });
};
