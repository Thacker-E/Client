import { GET_NOTE, GET_SUCCESS, GET_FAILURE } from '../actions';

const noteState = {
    note: '',
    getting: false,
    error: null
};

export const getReducers = ( state = noteState, action ) => {
    switch (action.type) {
        case GET_NOTE:
            return {
                ...state,
                getting: true
            };
        case GET_SUCCESS:
            return {
                ...state,
                note: action.payload,
                getting: false
            };
        case GET_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload
            }
        default:
            return state;
    }
}