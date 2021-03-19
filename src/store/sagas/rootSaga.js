import { all } from 'redux-saga/effects';
import profileSaga from './profileSaga';

const sagas = [profileSaga()];

function* rootSaga() {
    yield all(sagas);
}

export default rootSaga;
