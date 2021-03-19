import { combineReducers } from 'redux';
import initialReducer from './initial/reducer';
import profileReducer from './profile/reducer';

export default combineReducers({
    initial: initialReducer,
    profile: profileReducer,
});
