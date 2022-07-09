import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import config from '../../config';

const { api } = config;

function* fetchEvents(action) {
	try {
		const events = yield call(axios, api.eventBaseUrl);
		yield put({ type: 'GET_EVENTS_SUCCESS', events: events });
	} catch (e) {
		yield put({ type: 'GET_EVENTS_FAILED', message: e.message });
	}
}

export function* eventsSaga() {
	yield takeEvery('GET_EVENTS_REQUESTED', fetchEvents);
}

async function postEventApi(newEvent) {
	const apiUrl = `${api.eventBaseUrl}`;

	await axios.post(apiUrl, newEvent);
}

function* postEvent(action) {
	try {
		const payload = yield call(postEventApi, action.payload);
		yield put({ type: 'ADD_EVENT_SUCCESS', event: payload });
	} catch (e) {
		yield put({ type: 'ADD_EVENT_FAILED', message: e.message });
	}
}

export function* postEventSaga() {
	yield takeEvery('ADD_EVENT_REQUESTED', postEvent);
}
