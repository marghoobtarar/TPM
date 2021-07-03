import { combineReducers } from 'redux';
import auth from './auth';
import state from './states'

export default combineReducers({
    auth,state
});
