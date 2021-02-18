import React from 'react';
import { Text, View } from 'react-native';
import i18n from '../../../hooks/useApi';
import styles from './styles';

function LoginScreen({ }) {
    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <Text>{i18n.t('login')}</Text>

        </View>
    );
}

export default LoginScreen;