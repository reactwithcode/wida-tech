import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dashboard from './pages/Dashboard';
import { Provider } from 'react-redux';

import store from './redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Dashboard />
		</Provider>
	</React.StrictMode>
);
