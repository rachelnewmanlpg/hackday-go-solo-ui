import { createAction } from '@reduxjs/toolkit';

export const ns = 'profile';

export const initial = createAction(`${ns}/initial`);
const getProfile = createAction(`${ns}/getProfile`);
const getProfileSuccess = createAction(`${ns}/getProfileSuccess`, function prepare(data) {
    return {
        payload: {
            data,
        },
    };
});

const createProfile = createAction(`${ns}/createProfile`, function prepare(data) {
    return {
        payload: {
            data,
        },
    };
});

const createProfileSuccess = createAction(`${ns}/createProfileSuccess`, function prepare(data) {
    return {
        payload: { data },
    };
});

export default {
    initial,
    createProfile,
    createProfileSuccess,
    getProfile,
    getProfileSuccess,
};
