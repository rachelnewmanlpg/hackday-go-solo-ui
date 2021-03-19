import { put, call, takeLatest } from 'redux-saga/effects';
import getConfig from 'next/config';
import { profileActions } from '../ducks/profile';
import { getData, postData } from '../../utils/request';
import safeSaga from './safaSaga';

export function* createProfile({ payload: { data } }) {
    const response = yield call(postData, 'https://localhost:3000/api/proxy/profile', data);
    yield put({
        type: profileActions.createProfileSuccess.type,
        payload: {
            data: response.data,
        },
    });
}

export function* getProfile({ payload: data }) {
    yield put({
        type: profileActions.getProfileSuccess.type,
        payload: {
            data: {},
        },
    });
    const response = yield call(getData, `https://localhost:3000/api/proxy/profile/email=${data}`, data);
    yield put({
        type: profileActions.getProfileSuccess.type,
        payload: {
            data: response.data,
        },
    });
}

function* watchDataRequest() {
    yield takeLatest(profileActions.createProfile, safeSaga(createProfile));
    yield takeLatest(profileActions.getProfile, safeSaga(getProfile));
}

export default watchDataRequest;
