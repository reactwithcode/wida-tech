import * as type from '../types';

const initialEventsState = {
	events: [],
	loading: false,
	error: null,
};

export function events(state = initialEventsState, action) {
	switch (action.type) {
		case type.GET_EVENTS_REQUESTED:
			return {
				...state,
				loading: true,
			};
		case type.GET_EVENTS_SUCCESS:
			return {
				...state,
				loading: false,
				events: action.events,
			};
		case type.GET_EVENTS_FAILED:
			return {
				...state,
				loading: false,
				error: action.message,
			};
		case type.ADD_EVENT_REQUESTED:
			return {
				...state,
				loading: true,
			};
		case type.ADD_EVENT_SUCCESS:
			return {
				...state,
				loading: false,
				event: action.payload,
			};
		case type.ADD_EVENT_FAILED:
			return {
				...state,
				loading: false,
				error: action.message,
			};
		default:
			return state;
	}
}

