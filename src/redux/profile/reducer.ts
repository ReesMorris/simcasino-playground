import { Reducer } from 'redux';
import { ProfileActionTypes, ProfileState } from './types';

export const initialState: ProfileState = {
  loading: false,
  error: null,
  data: null
};

const reducer: Reducer<ProfileState> = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ProfileActionTypes.SET_PROFILE:
      return { ...state, loading: false, error: null, data: payload };
    case ProfileActionTypes.SET_PROFILE_ERROR:
      return { ...state, loading: false, error: payload, data: null };
    default:
      return state;
  }
};

export { reducer as profileReducer };
