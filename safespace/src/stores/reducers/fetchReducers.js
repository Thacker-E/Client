import { FETCH_MESSAGE, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';

const iniState = {
    messages: [],
    fetching: false,
    error: null
}

export const fetchReducers = (state = iniState, action) => {
    switch (action.type) {
        case FETCH_MESSAGE:
            return {
                ...state,
                fetching: true
            };
        case FETCH_SUCCESS: 
            return {
                ...state,
                messages: [ ...action.payload ],
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