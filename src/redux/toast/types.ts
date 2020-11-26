export interface IToast {
  id: string;
  message: string;
}

export enum ToastActionTypes {
  SHOW_TOAST = 'SHOW_TOAST',
  HIDE_TOAST = 'HIDE_TOAST'
}

export interface ToastState {
  messages: IToast[];
}
