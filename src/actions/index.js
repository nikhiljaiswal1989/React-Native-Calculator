import {CLEAR_DISPLAY, DELETE_LAST_CHARACTER, DOT, EQUAL,ADD_CHARACTER} from './types'
export const displayChanged = (text) => {
  if (text === 'CLR') {
    return {
      type: CLEAR_DISPLAY,
      payload: text
    };
  } else if (text === 'DEL') {
    return {
      type: DELETE_LAST_CHARACTER,
    }
  } else if (text === '.') {
    return {
      type: DOT,
      payload: text
    }
  }else if (text === '=') {
    return {
      type: EQUAL,
    }
  }else{
 return {
    type: ADD_CHARACTER,
    payload: text
  }
  }
};
