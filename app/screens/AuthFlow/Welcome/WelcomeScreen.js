import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { Button, Text, withTheme } from 'react-native-elements';
import { LanguageContext } from '../../../context/language';
import Routes from '../../../router/routes';
import styles from './styles';
import fontConfigs from '../../../style/fontConfigs';


function WelcomeScreen({ navigation, replaceTheme }) {

    const { getString, changeLanguage } = useContext(LanguageContext);

    return (
        <View style={styles.container}>
            <Text h1>{getString('hello')}</Text>

            <Button title={getString('login')} onPress={() => navigation.navigate(Routes.LOGIN)} />
            <Button title={getString('register')} onPress={() => navigation.navigate(Routes.RESGITER)} />

            <Button title="English" onPress={() => {
                changeLanguage('en', replaceTheme);
            }} />

            <Button title="Persian" onPress={() => {
                changeLanguage('fa', replaceTheme);
            }} />
        </View>
    );
}

export default withTheme(WelcomeScreen);