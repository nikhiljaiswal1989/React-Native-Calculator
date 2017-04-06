//import {DISPLAY_CHANGED} from './type'
export const displayChanged = (text) => {
  return {
    type: 'display_changed',
    payload: text
  };
};
