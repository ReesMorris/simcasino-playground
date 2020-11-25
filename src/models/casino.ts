export interface ICasino {
  system: {
    Runtime: string;
  };
  objects: ICasinoObject[];
  objectData: {
    [id: string]: ICasinoObjectData;
  };
  gameTimer: {
    totalGameSeconds: number;
  };
}

export interface ICasinoObject {
  guid: number;
  path: string;
}

export interface ICasinoObjectData {
  SlotMachine?: {
    SlotGame:
      | 'Slot Queen of the Sands'
      | 'Slot Classic Sevens'
      | 'Slot GameJack - Video Poker'
      | 'Slot Santa Gifts'
      | 'Slot Elven Forest'
      | 'Slot Zombie Treasures'
      | 'Slot Lucky Mill'
      | 'Slot Ring Of Fortune';
  };
}
