import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from './logger';

const prefix = 'cache';

const KEYS = {
    LANGUAGE: 'lang'
}

const save = async (key, value) => {
    try {
        await AsyncStorage.setItem(`${prefix}_${key}`, value);
    } catch (error) {
        logger.log(error)
    }
}

const get = async (key, defaultValue) => {
    try {
        const value = await AsyncStorage.getItem(`${prefix}_${key}`);
        return (value || defaultValue);
    } catch (error) {
        logger.log(error)
    }
}

export default {
    KEYS,
    save,
    get,
}


// import dayjs from 'dayjs';

// const prefix = 'cache';
// const expiryInMinutes = 5;

// const save = async (key, value) => {
//     try {
//         const item = {
//             value,
//             timestamp: Date.now()
//         }
//         await AsyncStorage.setItem(`${prefix}_${key}`, JSON.stringify(value));
//     } catch (error) {
//         console.log(error)
//     }
// }

// const isExpire = item => {
//     const storedTime = dayjs(item.timestamp);
//     const now = dayjs(Date.now);
//     return now.diff(storedTime, 'minute') > expiryInMinutes
// }

// const get = async (key) => {
//     try {
//         const jsonItem = await AsyncStorage.getItem(`${prefix}_${key}`);
//         const item = JSON.parse(jsonItem)

//         if (isExpire(item)) {
//             await AsyncStorage.removeItem(`${prefix}_${key}`)
//             return null;
//         }

//         return item.value;
//     } catch (error) {
//         console.log(error);
//     }
// }

// export default {
//     save,
//     get
// }