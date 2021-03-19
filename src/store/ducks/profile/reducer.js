import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

export const initialState = {
    created: false,
};

const profileReducer = createReducer(initialState, {
    [actions.createProfileSuccess]: (state) => {
        state.created = true;
    },
});

export default profileReducer;
