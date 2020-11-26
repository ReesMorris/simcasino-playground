import { ICasino, ICasinoMeta } from '../../models/casino';

export enum CasinoActionTypes {
  SET_CASINO = 'SET_CASINO',
  SET_CASINO_ERROR = 'SET_CASINO_ERROR',
  SET_CASINO_META = 'SET_CASINO_META'
}

export interface CasinoState {
  loading: boolean;
  error: string | null;
  data: ICasino | null;
  meta: ICasinoMeta | null;
}
