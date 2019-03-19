import { combineReducers } from 'redux';
import { fetchReducers } from './fetchReducers';
import { getReducers } from './getReducers';
import { addReducers } from './addReducers';

export default combineReducers({
    fetchReducers,
    getReducers,
    addReducers
});