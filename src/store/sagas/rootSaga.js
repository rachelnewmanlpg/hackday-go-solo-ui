import { all } from 'redux-saga/effects';
import profileSaga from './profileSaga';
import attractionSaga from './attractionSaga';

const sagas = [profileSaga(), attractionSaga()];

function* rootSaga() {
    yield all(sagas);
}

export default rootSaga;
