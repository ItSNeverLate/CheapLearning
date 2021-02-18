
import * as SecureStorage from 'expo-secure-store';

const key = 'authToken';

const saveToken = async token => {
    try {
        await SecureStorage.setItemAsync(key, token)
    } catch (error) {
        console.log('Error saving the auth token', error);
    }
}

const getToken = async () => {
    try {
        return await SecureStorage.getItemAsync(key);
    } catch (error) {
        console.log('Error getting the auth token', error);
    }
}

const removeToken = async () => {
    try {
        await SecureStorage.removeToken(key);
    } catch (error) {
        console.log('Error removing the auth token', error);
    }
}

export default { saveToken, getToken, removeToken }