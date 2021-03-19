import { combineReducers } from 'redux';
import initialReducer from './initial/reducer';
import profileReducer from './profile/reducer';
import attractionsReducer from './attractions/reducer';

export default combineReducers({
    initial: initialReducer,
    profile: profileReducer,
    attractions: attractionsReducer,
});
