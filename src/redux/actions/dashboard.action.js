import * as type from '../types';

export const getEvents = () => {
	return {
		type: type.GET_EVENTS_REQUESTED,
	};
};

export const addEvent = (payload) => {
	return { type: type.ADD_EVENT_REQUESTED, payload: payload };
};

export const getWeathers = () => {
	return {
		type: type.GET_WEATHERS_REQUESTED,
	};
};
