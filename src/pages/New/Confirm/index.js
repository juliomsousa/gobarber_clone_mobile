import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './styles';
import Background from '~/components/Background';

export default function Confirm() {
	return (
		<Background>
			<Container>
				<View />
			</Container>
		</Background>
	);
}

Confirm.navigationOptions = ({ navigation }) => ({
	title: 'Confirmação do agendamento',
	headerLeft: () => (
		<TouchableOpacity onPress={() => navigation.pop()}>
			<Icon name="chevron-left" size={20} color="#FFF" />
		</TouchableOpacity>
	),
});
