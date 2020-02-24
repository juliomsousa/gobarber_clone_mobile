import React from 'react';
import { StatusBar } from 'react-native';
import { enableScreens } from 'react-native-screens';

import Routes from './routes';

// import { Container } from './styles';

export default function App() {
	enableScreens();

	return (
		<>
			<StatusBar barStyle="light-content" backgroundColor="#7159c1" />
			<Routes />
		</>
	);
}
