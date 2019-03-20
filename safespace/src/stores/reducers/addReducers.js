import { ADD_MESSAGE, ADD_SUCCESS, ADD_FAILURE } from '../actions';

const iniState = {
    note: [],
    adding: false,
    error: null
}

export const addReducers = (state = iniState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                adding: true
            };
        case ADD_SUCCESS:
            return {
                ...state,
                note: action.payload,
                adding: false
            };
        case ADD_FAILURE:
            return {
                ...state,
                adding: false,
                error: action.payload
            };
        default:
            return state;
    }
}