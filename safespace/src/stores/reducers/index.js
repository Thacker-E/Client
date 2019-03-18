import { combineReducers } from 'redux';
import { fetchReducers } from './fetchReducers';
import { addReducers } from './addReducers';

export default combineReducers({
    fetchReducers,
    addReducers
});