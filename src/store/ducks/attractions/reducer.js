import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

export const initialState = {
    attractionList: [
        {
            id: '8e8f6282-8837-11eb-8dcd-0242ac130003',
            name: 'Empire State Building',
            sku: 'Nyc_Att_Empire_State_Building_Observatory',
            goTechAttractionId: '102100',
            drupalContentId: '',
            city: 'Nyc',
            categories: ['INDOORS'],
        },
        {
            id: '7733a084-f4a0-4cc4-85e7-d530dc6bad23',
            name: 'Night Tour by Big Bus New York',
            sku: 'Nyc_Att_Night_Tour_by_Big_Bus',
            goTechAttractionId: '100799',
            drupalContentId: '',
            city: 'Nyc,',
            categories: ['INDOORS'],
        },
        {
            id: '2a95f6eb-d9da-4594-97fd-4e62a45c55e9',
            name: 'Madame Tussauds New York',
            sku: 'Nyc_Att_Madame_Tussauds_General_Admission',
            goTechAttractionId: '104593',
            drupalContentId: '',
            city: 'Nyc',
            categories: ['INDOORS'],
        },
    ],
    selected: [],
};

const attractionReducer = createReducer(initialState, {
    [actions.getAttractionSuccess]: (state, { payload: { data } }) => {},
    [actions.getProfileSuccess]: (state, { payload: { data } }) => {
        // state.user = data;
    },
    [actions.selectAttractions]: (state, action) => {
        state.selected = action.payload.data.friendAttractions;
    },
});

export default attractionReducer;
