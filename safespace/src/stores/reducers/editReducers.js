import { EDIT_MESSAGE, EDIT_SUCCESS, EDIT_FAILURE } from '../actions';

const iniState = {
    message: [],
    editing: false,
    error: null
};

export const addReducers = (state = iniState, action) => {
    switch (action.type) {
        case EDIT_MESSAGE:
            return {
                ...state,
                editing: true
            };
        case EDIT_SUCCESS:
            return {
                ...state,
                message: [ ...action.payload ],
                editing: false
            };
        case EDIT_FAILURE:
            return {
                ...state,
                editing: false,
                error: action.payload
            };
        default:
            return state;
    };
};