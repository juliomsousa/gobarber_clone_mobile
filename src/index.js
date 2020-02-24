import React from 'react';
import { StatusBar } from 'react-native';
import { enableScreens } from 'react-native-screens';
import './config/ReactotronConfig';

import Routes from './routes';

export default function App() {
	enableScreens();

	return (
		<>
			<StatusBar barStyle="light-content" backgroundColor="#7159c1" />
			<Routes />
		</>
	);
}
