import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { enableScreens } from 'react-native-screens';

import Routes from './routes';

// import { Container } from './styles';

export default function App() {
	enableScreens();

	return <Routes />;
}
