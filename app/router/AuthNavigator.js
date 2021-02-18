import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import LoginScreen from '../screens/AuthFlow/Login/LoginScreen';
import RegisterScreen from '../screens/AuthFlow/Register/RegisterScreen';
import Routs from './routes';
import WelcomeScreen from '../screens/AuthFlow/Welcome/WelcomeScreen';

const Stack = createStackNavigator();

const MainNavigator = () => (
    <Stack.Navigator mode="modal">
        <Stack.Screen name={Routs.WELCOME} component={WelcomeScreen} options={{ headerShown: false }}  />
        <Stack.Screen name={Routs.LOGIN} component={LoginScreen} />
        <Stack.Screen name={Routs.RESGITER} component={RegisterScreen} />
    </Stack.Navigator>
);

export default MainNavigator;