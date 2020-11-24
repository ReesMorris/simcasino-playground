import { Reducer } from 'redux';
import { ProfileActionTypes, ProfileState } from './types';

export const initialState: ProfileState = {
  loading: false,
  error: null,
  data: null
};

const reducer: Reducer<ProfileState> = (state = initialState, action) => {
  switch (action.type) {
    case ProfileActionTypes.SET_PROFILE: {
      return { ...state, loading: false, error: null, data: null };
    }
    default: {
      return state;
    }
  }
};

export { reducer as profileReducer };
