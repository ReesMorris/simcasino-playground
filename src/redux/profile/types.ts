import { IProfile } from '../../models/profile';

export enum ProfileActionTypes {
  SET_PROFILE = 'SET_PROFILE',
  SET_PROFILE_ERROR = 'SET_PROFILE_ERROR'
}

export interface ProfileState {
  loading: boolean;
  error: string | null;
  data: IProfile | null;
}
