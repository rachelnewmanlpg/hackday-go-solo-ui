import { put, call, takeLatest } from 'redux-saga/effects';
import getConfig from 'next/config';
import { profileActions } from '../ducks/profile';
import { getData, postData } from '../../utils/request';
import safeSaga from './safaSaga';
import { attractionActions } from '../ducks/attractions';

export function* getAttractionsByCity({ payload: data }) {
    yield put({
        type: attractionActions.getAttractionSuccess.type,
        payload: {
            data: {},
        },
    });
    const response = yield call(getData, `https://localhost:3000/api/proxy/attraction/${data}/city`, data);
    yield put({
        type: profileActions.getAttractionSuccess.type,
        payload: {
            data: response.data,
        },
    });
}

function* watchDataRequest() {
    yield takeLatest(attractionActions.getAttractionsByCity, safeSaga(getAttractionsByCity));
}

export default watchDataRequest;
