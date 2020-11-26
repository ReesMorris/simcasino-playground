import { CasinoActionTypes } from './types';
import { AppThunk } from '../store';
import { slotGames, SlotGameTypes, slotMachines } from '../../models/slots';

export const setCasino: AppThunk = (
  text: string,
  file: File
) => async dispatch => {
  try {
    if (text.substr(0, 5) === 'ERROR')
      throw new Error(text.substring(6, text.length));

    const lineBreakIndex = text.indexOf('\n');
    const md5 = text.substr(0, lineBreakIndex);
    dispatch({
      type: CasinoActionTypes.SET_CASINO_META,
      payload: { fileName: file.name, md5hash: md5 }
    });

    dispatch({
      type: CasinoActionTypes.SET_CASINO,
      payload: JSON.parse(
        text.substring(lineBreakIndex, text.length) // without the md5 hash
      )
    });
  } catch (err) {
    dispatch({
      type: CasinoActionTypes.SET_CASINO_ERROR,
      payload: err.message
    });
  }
};

export const randomiseSlotGames: AppThunk = () => async (
  dispatch,
  getState
) => {
  const { data } = getState().casino;
  if (data) {
    let objectData = { ...data.objectData };

    // Get the `guids` of all slot machines that can change their name
    const guids: number[] = [];
    data.objects.forEach(object => {
      const slotMachine = slotMachines[object.path];
      if (slotMachine && slotMachine.can_choose_game) guids.push(object.guid);
    });

    // Loop through all `guids` and swap out their games for random ones
    if (guids.length > 0) {
      const multiGames = slotGames.filter(game => game.is_multi_machine);
      guids.forEach(guid => {
        const slotMachine = { ...data.objectData[guid].SlotMachine };

        // Update our local object with the new data
        if (slotMachine) {
          objectData = {
            ...objectData,
            [guid]: {
              ...objectData[guid],
              SlotMachine: {
                ...objectData[guid].SlotMachine,
                SlotGame:
                  multiGames[Math.floor(Math.random() * multiGames.length)].name
              }
            }
          };
        }
      });
    }

    // Update the Redux state
    dispatch({
      type: CasinoActionTypes.SET_CASINO,
      payload: { ...data, objectData: { ...objectData } }
    });
  }
};
