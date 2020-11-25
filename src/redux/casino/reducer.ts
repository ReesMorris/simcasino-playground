import { Reducer } from 'redux';
import { CasinoActionTypes, CasinoState } from './types';

export const initialState: CasinoState = {
  loading: false,
  error: null,
  data: null
};

const reducer: Reducer<CasinoState> = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CasinoActionTypes.SET_CASINO:
      return { ...state, loading: false, error: null, data: payload };
    case CasinoActionTypes.SET_CASINO_ERROR:
      return { ...state, loading: false, error: payload, data: null };
    default:
      return state;
  }
};

export { reducer as casinoReducer };
