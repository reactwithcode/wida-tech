import { combineReducers } from 'redux';
import { events } from './dashboard.reducer';

const rootReducer = combineReducers({
	events: events,
});

export default rootReducer;
