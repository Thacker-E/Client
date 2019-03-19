import { ADD_NOTE, ADD_SUCCESS, ADD_FAILURE } from '../actions';

const iniState = {
    note: [],
    addingNote: false,
    error: null
}

export const addReducers = (state = iniState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return {
                ...state,
                addingNote: true
            };
        case ADD_SUCCESS:
            return {
                ...state,
                note: action.payload,
                addingNote: false
            };
        case ADD_FAILURE:
            return {
                ...state,
                addingNote: false,
                error: action.payload
            };
        default:
            return state;
    }
}