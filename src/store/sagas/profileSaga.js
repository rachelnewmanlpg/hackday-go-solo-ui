import { put, call, takeLatest } from 'redux-saga/effects';
import getConfig from 'next/config';
import { profileActions } from '../ducks/profile';
import { getData, postData } from '../../utils/request';
import safeSaga from './safaSaga';

export function* createProfile({
    payload: {
        data: { data, orderNumber },
    },
}) {
    yield put({
        type: profileActions.createProfileSuccess.type,
        payload: {
            data: { ...data, orderNumber, city: 'Nyc' },
        },
    });
    const response = yield call(postData, 'http://localhost:3000/api/proxy/profile', data);
    const passResponse = yield call(
        getData,
        `http://localhost:3000/api/proxy/pass?email=${data.email}&orderNumber=${orderNumber}`
    );
    yield put({
        type: profileActions.createProfileSuccess.type,
        payload: {
            data,
        },
    });
}

export function* getPass({
    payload: {
        data: { orderNumber },
    },
}) {
    const passResponse = yield call(
        getData,
        `http://localhost:3000/api/proxy/pass?email=${email}&orderNumber=${orderNumber}`
    );
    yield put({
        type: profileActions.createProfileSuccess.type,
        payload: {
            passResponse,
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
    const response = yield call(getData, `http://localhost:3000/api/proxy/profile/email=${data}`, data);
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
