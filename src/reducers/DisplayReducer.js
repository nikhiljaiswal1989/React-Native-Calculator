import {ADD_CHARACTER, CLEAR_DISPLAY, DELETE_LAST_CHARACTER, DOT, EQUAL} from '../actions/types'

const INITIAL_STATE = { displaytext: '', displayresult: '' };
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_CHARACTER:
            return { ...state, displaytext: state.displaytext.concat(action.payload), displayresult: '' };
        case CLEAR_DISPLAY:
            return { ...state, ...INITIAL_STATE };
        case DELETE_LAST_CHARACTER:
            return { ...state, displaytext: state.displaytext.slice(0, -1), displayresult: '' };
        case DOT:
            if (state.displaytext.includes('.') === true)
                return { ...state, displaytext: state.displaytext };
            else
                return { ...state, displaytext: state.displaytext.concat(action.payload), displayresult: '' };
        case '=':
            const regex = /-?\\w+|[-+*%/()]/;
            if (regex.test(state.displaytext))
                try {
                    const result = eval(state.displaytext);
                    return { ...state, displayresult: result, displaytext: '' };
                } catch (e) {
                    alert('Not a valid equation');
                    return { ...state, displaytext: state.displaytext };
                }
            else {
                alert('Not a valid equation');
                return { ...state, displaytext: state.displaytext };
            }
        default:
            return state;
    }
};
