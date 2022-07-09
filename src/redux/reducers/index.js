import { combineReducers } from 'redux';
import { events, weathers } from './dashboard.reducer';

const rootReducer = combineReducers({
	events: events,
	weathers: weathers,
});

export default rootReducer;
