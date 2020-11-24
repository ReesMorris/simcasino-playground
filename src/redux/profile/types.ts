import { IProfile } from '../../models/profile';

export enum ProfileActionTypes {
  SET_PROFILE = 'SET_PROFILE'
}

export interface ProfileState {
  readonly loading: boolean;
  readonly error: string | null;
  readonly data: IProfile | null;
}
