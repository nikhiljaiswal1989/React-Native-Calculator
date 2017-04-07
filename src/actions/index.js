import {DISPLAY_CHANGED} from './types'
export const displayChanged = (text) => {
  return {
    type: DISPLAY_CHANGED,
    payload: text
  };
};
