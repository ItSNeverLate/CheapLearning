import React, { useContext } from 'react';
import { Button, Text, withTheme } from 'react-native-elements';
import { View } from 'react-native';
import useLanguage from '../../../hooks/useApi';
import i18n from '../../../hooks/useApi';
import styles from './styles';
import { LanguageContext } from '../../../context/language';

function SettingScreen({ replaceTheme }) {

    const { getString, changeLanguage } = useContext(LanguageContext);

    return (
        <View style={styles.container}>
            <Text h1>{getString('setting')}</Text>
            <Button title="FA" onPress={() => changeLanguage('fa', replaceTheme)} />
            <Button title="EN" onPress={() => changeLanguage('en', replaceTheme)} />
        </View>
    );
}

export default withTheme(SettingScreen);