import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
	Reactotron.setAsyncStorageHandler(AsyncStorage)
		.configure({ name: 'GoBarber' })
		.useReactNative()
		.use(reactotronRedux())
		.use(reactotronSaga())
		.connect();

	Reactotron.clear();
	console.tron = Reactotron;
}
