import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import Types from './actionTypes';
import { updateProfileSuccess, updateProfileFailure } from './actions';

import api from '~/services/api';

export function* updateProfile({ payload }) {
	try {
		const { name, email, ...rest } = payload.data;

		const profile = {
			name,
			email,

			...(rest.oldPassword ? rest : {}),
		};

		const response = yield call(api.put, 'users', profile);

		Alert.alert('Sucesso', 'Perfil atualizado!');

		yield put(updateProfileSuccess(response.data));
	} catch (err) {
		Alert.alert('Falha', 'Erro ao atualizar perfil, verifique seus dados!');
		yield put(updateProfileFailure());
	}
}

export default all([takeLatest(Types.UPDATE_PROFILE_REQUEST, updateProfile)]);
