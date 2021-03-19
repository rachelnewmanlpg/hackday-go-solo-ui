import { createAction } from '@reduxjs/toolkit';

export const ns = 'profile';

export const initial = createAction(`${ns}/initial`);

const selectAttractions = createAction(`${ns}/selectAttractions`, function prepare(data) {
    return {
        payload: { data },
    };
});
export default {
    initial,
    selectAttractions,
};
