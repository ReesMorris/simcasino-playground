import { SlotGameTypes } from './slots';

export interface ICasinoMeta {
  fileName: string;
  md5hash: string;
}

export interface ICasino {
  system: {
    Runtime: string;
  };
  objects: ICasinoObject[];
  objectData: {
    [id: number]: {
      SlotMachine?: {
        SlotGame: SlotGameTypes;
      };
    };
  };
  gameTimer: {
    totalGameSeconds: number;
  };
}

export interface ICasinoObject {
  guid: number;
  path: string;
}
