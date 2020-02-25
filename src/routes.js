import {
	createAppContainer,
	createBottomTabNavigator,
	createSwitchNavigator,
} from 'react-navigation';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

export default (isSigned = false) =>
	createAppContainer(
		createSwitchNavigator(
			{
				Auth: createSwitchNavigator({
					SignIn,
					SignUp,
				}),
				App: createBottomTabNavigator({
					Dashboard,
				}),
			},
			{
				initialRouteName: isSigned ? 'App' : 'Auth',
			}
		)
	);
