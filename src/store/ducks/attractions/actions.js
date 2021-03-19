import { createAction } from '@reduxjs/toolkit';

export const ns = 'attraction';

export const initial = createAction(`${ns}/initial`);
const getAttractionsByCity = createAction(`${ns}/getAttractionsByCity`, function prepare(data) {
    return {
        payload: {
            data,
        },
    };
});
const getAttractionSuccess = createAction(`${ns}/getAttractionSuccess`);

const selectAttractions = createAction(`${ns}/selectAttractions`, function prepare(data) {
    return {
        payload: { data },
    };
});
export default {
    initial,
    getAttractionsByCity,
    getAttractionSuccess,
    selectAttractions,
};
