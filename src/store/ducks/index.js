import { combineReducers } from 'redux';
import initialReducer from './initial/reducer';
import profileReducer from './profile/reducer';
import attractionReducer from './attractions/reducer';

export default combineReducers({
    initial: initialReducer,
    profile: profileReducer,
    attractions: attractionReducer,
});
