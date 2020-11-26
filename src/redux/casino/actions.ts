import { CasinoActionTypes } from './types';
import { AppThunk } from '../store';

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
