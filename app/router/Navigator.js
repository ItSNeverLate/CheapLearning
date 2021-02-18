import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import { withTheme } from 'react-native-elements';
import { LanguageContext } from '../context/language.js';
import DefaultTheme from '../style/navigationTheme';
import logger from '../utility/logger.js';
import storage from '../utility/storage.js';
import MainNavigator from './MainNavigator';
import * as SplashScreen from 'expo-splash-screen';


function Navigator({ replaceTheme }) {

    const { changeLanguage } = useContext(LanguageContext);

    const setConfigurations = async () => {
        try {
            const lang = await storage.get(storage.KEYS.LANGUAGE,'en');
            changeLanguage(lang, replaceTheme)
        } catch (e) {
            logger.log(error)
        }
    }

    useEffect(() => { 
        setConfigurations()
     }, []);

    return (
        <NavigationContainer theme={DefaultTheme}>
            <MainNavigator />
        </NavigationContainer>
    );
}

export default withTheme(Navigator);