import { useState } from 'react';
import i18n from 'i18n-js';

import en from '../localization/en';
import fa from '../localization/fa';

// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;
i18n.translations = {
    en,
    fa
};
i18n.defaultLocale = 'en';

function useLanguage() {
    const [language,changeLanguge] = useState();
    
    i18n.locale = language;

    const getString = key => i18n.t(key);

    return {getString,changeLanguge};
}

export default useLanguage;


// import i18n from 'i18next';
// import Expo from 'expo';

// // creating a language detection plugin using expo
// // http://i18next.com/docs/ownplugin/#languagedetector
// const languageDetector = {
//     type: 'languageDetector',
//     async: true, // async detection
//     detect: (cb) => {
//         return Expo.Util.getCurrentLocaleAsync()
//             .then(lng => { cb(lng.replace('_', '-')); })
//     },
//     init: () => { },
//     cacheUserLanguage: () => { }
// }
// i18n
//     .use(languageDetector)
//     .init({
//         fallbackLng: 'en',
//         // the translations
//         // realworld load that via xhr or bundle those using webpack    
//         resources: {
//             en,
//             fa,
//             ns: ['translation'],
//             defaultNS: 'translation',
//             interpolation: {
//                 escapeValue: false // not needed for react
//             }
//         }
//     });

// export default i18n;