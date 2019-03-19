import { FETCH_NOTES, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';

const iniState = {
    notes: [],
    fetching: false,
    error: null
}

export const fetchReducers = (state = iniState, action) => {
    switch (action.type) {
        case FETCH_NOTES:
            return {
                ...state,
                fetching: true
            };
        case FETCH_SUCCESS: 
            return {
                ...state,
                notes: [action.payload],
                fetching: false
            };
        case FETCH_FAILURE:
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}