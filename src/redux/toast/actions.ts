import { v4 as uuidv4 } from 'uuid';
import { AppThunk } from '../store';
import { ToastActionTypes } from './types';

export const showToast: AppThunk = (message: string) => dispatch => {
  dispatch({
    type: ToastActionTypes.SHOW_TOAST,
    payload: { id: uuidv4(), message }
  });
};

export const removeToast: AppThunk = (id: string) => dispatch => {
  dispatch({
    type: ToastActionTypes.HIDE_TOAST,
    payload: id
  });
};
