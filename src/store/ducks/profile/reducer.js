import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

export const initialState = {
    created: false,
    user: {
        email: 'tester@smartdestinations.com',
        name: 'Tom Allen',
        age: 25,
        languages: ['English', 'German'],
        profileInfo: {
            exploreWith: 'FEMALE',
            gender: 'MALE',
            interests: ['THEME_PARKS', 'FINE_DINING', 'ZOOS', 'OUTDOORS'],
            travelApproach: 5,
            describeYourself: 5,
        },
        bio: 'Something about a something to do with a bio',
    },
};

const profileReducer = createReducer(initialState, {
    [actions.createProfileSuccess]: (state, { payload: { data } }) => {
        state.created = true;
        state.user = data;
    },
    [actions.getProfileSuccess]: (state, { payload: { data } }) => {
        // state.user = data;
    },
});

export default profileReducer;
