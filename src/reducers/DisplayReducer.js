//import {DISPLAY_CHANGED} from '../actions/type'

const INITIAL_STATE = { displaytext: '', displayresult: '' };
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'display_changed':
            switch (action.payload) {
                case 'DEL':
                    return { ...state, displaytext: state.displaytext.slice(0, -1), displayresult: '' };
                case 'CLR':
                    return { ...state, displaytext: '', displayresult: '' };
                case '.':
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
                    return { ...state, displaytext: state.displaytext.concat(action.payload), displayresult: '' };
            }
        default:
            return state;
    }
};
