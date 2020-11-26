export interface ISlotMachines {
  can_choose_game: boolean;
}
export const slotMachines: Record<string, ISlotMachines> = {
  'Placeable/Slot Cabinet Eldora': { can_choose_game: true },
  'Placeable/Slot Cabinet Fortune Ruler': { can_choose_game: true },
  'Placeable/Slot Cabinet GoldFinder': { can_choose_game: true },
  'Placeable/Slot Cabinet GameJack': { can_choose_game: false },
  'Placeable/Slot Cabinet Jupiter': { can_choose_game: true },
  'Placeable/Slot Cabinet KX43': { can_choose_game: true },
  'Placeable/Slot Cabinet XRE': { can_choose_game: true },
  'Placeable/Wheel Of Fortune': { can_choose_game: false }
};

export type SlotGameTypes =
  | 'Slot Queen of the Sands'
  | 'Slot Classic Sevens'
  | 'Slot GameJack - Video Poker'
  | 'Slot Santa Gifts'
  | 'Slot Elven Forest'
  | 'Slot Zombie Treasures'
  | 'Slot Lucky Mill'
  | 'Slot Ring Of Fortune';
export interface ISlotGame {
  name: SlotGameTypes;
  is_multi_machine: boolean;
}
export const slotGames: ISlotGame[] = [
  { name: 'Slot Queen of the Sands', is_multi_machine: true },
  { name: 'Slot Classic Sevens', is_multi_machine: true },
  { name: 'Slot GameJack - Video Poker', is_multi_machine: false },
  { name: 'Slot Santa Gifts', is_multi_machine: true },
  { name: 'Slot Elven Forest', is_multi_machine: true },
  { name: 'Slot Zombie Treasures', is_multi_machine: true },
  { name: 'Slot Lucky Mill', is_multi_machine: true },
  { name: 'Slot Ring Of Fortune', is_multi_machine: false }
];
