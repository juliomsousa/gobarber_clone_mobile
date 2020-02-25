import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { enableScreens } from 'react-native-screens';
import './config/ReactotronConfig';

import { store, persistor } from './store';
import Routes from './routes';

export default function App() {
	enableScreens();

	return (
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={null}>
				<StatusBar barStyle="light-content" backgroundColor="#7159c1" />
				<Routes />
			</PersistGate>
		</Provider>
	);
}
