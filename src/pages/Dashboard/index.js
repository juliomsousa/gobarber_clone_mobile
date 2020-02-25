import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';
// import { signInRequest } from '~/store/modules/auth/actions';

import { Container } from './styles';

export default function Dashboard({ navigation }) {
	// const passwordRef = useRef();
	// const dispatch = useDispatch();
	// const loading = useSelector(state => state.auth.loading);

	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');

	// function handleSubmit() {
	// 	dispatch(signInRequest(email, password));
	// }

	return (
		<Background>
			<Container>
				<Image source={logo} />
			</Container>
		</Background>
	);
}
