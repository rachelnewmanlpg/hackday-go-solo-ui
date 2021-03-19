import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

export const initialState = {
    selected: [],
};

const attractionReducer = createReducer(initialState, {
    [actions.selectAttractions]: (state, action) => {
        state.selected = action.payload.data.friendAttractions;
    },
});

export default attractionReducer;
