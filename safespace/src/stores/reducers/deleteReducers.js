import { DELETE_MESSAGE, DELETE_SUCCESS, DELETE_FAILURE } from '../actions';

const iniState = {
    message: [],
    deleting: false,
    error: null
};

export const addReducers = (state = iniState, action) => {
    switch (action.type) {
        case DELETE_MESSAGE:
            return {
                ...state,
                deleting: true
            };
        case DELETE_SUCCESS:
            return {
                ...state,
                message: [
                    ...state.message.slice(0, action.payload),
                    ...state.message.slice(action.payload + 1)
                ],
                deleting: false
            };
        case DELETE_FAILURE:
            return {
                ...state,
                deleting: false,
                error: action.payload
            };
        default:
            return state;
    };
};