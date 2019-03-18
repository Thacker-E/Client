import { LOG_IN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';

const iniState = {
    loggedIn: '',
    loggingIn: false,
    error: null
}

export const loginReducers = (state = iniState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                loggingIn: true
            };
        case LOGIN_SUCCESS: 
            return {
                ...state,
                loggedIn: action.payload,
                loggingIn: false
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                error: action.payload
            }
        default:
            return state;
    }
}