import { all } from 'redux-saga/effects';
import { eventsSaga, postEventSaga } from './dashboardSaga';

export default function* rootSaga() {
	yield all([eventsSaga(), postEventSaga()]);
}
