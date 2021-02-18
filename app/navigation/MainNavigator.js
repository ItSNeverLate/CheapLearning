import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { withTheme } from 'react-native-elements';
import MessageScreen from '../screens/MainFlow/Messages/MessageScreen';
import ScheduleScreen from '../screens/MainFlow/Schedule/ScheduleScreen';
import SearchScreen from '../screens/MainFlow/Search/SearchScreen';
import SettingScreen from '../screens/MainFlow/Setting/SettingScreen';
import AuthNavigator from './AuthNavigator';
import MiddleButton from './MiddleButton';
import Routes from './routes';


const Tab = createBottomTabNavigator();

const MainNavigator = () => (
    <Tab.Navigator
        tabBarOptions={{
            showLabel: false,
        }}
        initialRouteName={Routes.PROFILE}>
        <Tab.Screen name={Routes.MESSAGES} component={MessageScreen}
            options={{
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="message-outline" size={size} color={color} />
            }} />
        <Tab.Screen name={Routes.SETTING} component={SettingScreen} options={{
            tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="cog-outline" size={size} color={color} />
        }} />
        <Tab.Screen name={Routes.SEARCH} component={SearchScreen}
            options={{
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="magnify" size={size} color={color} />
            }} />
        <Tab.Screen name={Routes.PROFILE} component={AuthNavigator}
            options={{
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account-outline" size={size} color={color} />
            }} />
        <Tab.Screen name={Routes.SCHEDULE} component={ScheduleScreen}
            options={{
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="calendar-blank" size={size} color={color} />
            }} />
    </Tab.Navigator>
);

export default withTheme( MainNavigator);