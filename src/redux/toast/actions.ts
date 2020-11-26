import { AppThunk } from '../store';
import { ToastActionTypes } from './types';

export const showToast: AppThunk = (message: string) => async dispatch => {
  dispatch({ type: ToastActionTypes.SHOW_TOAST, payload: message });
};
