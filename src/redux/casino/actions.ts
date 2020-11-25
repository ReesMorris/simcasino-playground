import { CasinoActionTypes } from './types';
import { Action, Dispatch } from 'redux';
import { AppThunk } from '../store';

export const setCasino: AppThunk = (casinoFile: string) => (
  dispatch: Dispatch
): Action => {
  try {
    if (casinoFile.substr(0, 5) === 'ERROR')
      throw new Error(casinoFile.substring(6, casinoFile.length));

    return dispatch({
      type: CasinoActionTypes.SET_CASINO,
      payload: JSON.parse(
        casinoFile.substring(casinoFile.indexOf('\n'), casinoFile.length) // replace the md5 hash
      )
    });
  } catch (err) {
    return dispatch({
      type: CasinoActionTypes.SET_CASINO_ERROR,
      payload: err.message
    });
  }
};
