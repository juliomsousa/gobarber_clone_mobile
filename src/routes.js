import React from 'react';
import {
	createAppContainer,
	createBottomTabNavigator,
	createSwitchNavigator,
	createStackNavigator,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

import SelectProvider from './pages/New/SelectProvider';
import SelectDateTime from './pages/New/SelectDateTime';
import Confirm from './pages/New/Confirm';

export default (isSigned = false) =>
	createAppContainer(
		createSwitchNavigator(
			{
				Auth: createSwitchNavigator({
					SignIn,
					SignUp,
				}),
				App: createBottomTabNavigator(
					{
						Dashboard,
						New: {
							screen: createStackNavigator(
								{
									SelectProvider,
									SelectDateTime,
									Confirm,
								},
								{
									defaultNavigationOptions: {
										headerTransparent: true,
										headerTintColor: '#fff',
										headerLeftContainerStyle: {
											marginLeft: 20,
										},
									},
								}
							),
							navigationOptions: {
								tabBarVisible: false,
								tabBarLabel: 'Agendar',
								tabBarIcon: ({ tintColor }) => (
									<Icon name="add-circle-outline" size={20} color={tintColor} />
								),
							},
						},
						Profile,
					},
					{
						tabBarOptions: {
							keyboardHidesTabBar: true,
							activeTintColor: '#fff',
							inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
							style: {
								backgroundColor: '#8D41A8',
							},
						},
					}
				),
			},
			{
				initialRouteName: isSigned ? 'App' : 'Auth',
			}
		)
	);
