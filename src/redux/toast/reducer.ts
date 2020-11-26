import { Reducer } from 'redux';
import { ToastActionTypes, ToastState } from './types';

export const initialState: ToastState = {
  messages: []
};

const reducer: Reducer<ToastState> = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ToastActionTypes.SHOW_TOAST:
      return { ...state, messages: [...state.messages, payload] };
    case ToastActionTypes.HIDE_TOAST:
      return {
        ...state,
        messages: state.messages.filter(({ id }) => id !== payload)
      };
    default:
      return state;
  }
};

export { reducer as toastReducer };
