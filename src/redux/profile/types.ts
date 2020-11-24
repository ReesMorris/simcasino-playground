import { IProfile } from '../../models/profile';

export enum ProfileActionTypes {
  SET_PROFILE = 'SET_PROFILE',
  SET_PROFILE_ERROR = 'SET_PROFILE_ERROR'
}

export interface ProfileState {
  readonly loading: boolean;
  readonly error: string | null;
  readonly data: IProfile | null;
}
