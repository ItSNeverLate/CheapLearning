import React from 'react';
import { createContext, useState } from "react";

import en from '../localization/en.json';
import fa from '../localization/fa.json';
// import ar from '../lang/ar.json';

import fontConfigEN from '../style/fontConfigs/en.js';
import fontConfigFA from '../style/fontConfigs/fa.js';
// import fontConfigAR from '../style/fontConfigs/ar.js';
import theme from '../style/RNElementsTheme'
import storage from '../utility/storage';

const LanguageContext = createContext();

const languages = {
    "en": {
        resource: en,
        fontConfig: fontConfigEN,
        isRTL: false
    },
    "fa": {
        resource: fa,
        fontConfig: fontConfigFA,
        isRTL: true
    },
    // "ar": {
    //     resource: ar,
    //     fontConfig: fontConfigAR,
    //     isRTL: true
    // }
}

const LanguageProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState(languages['en']);

    const getString = (key) => currentLanguage.resource[key] || "Undefined String"
    const changeLanguage = (lang,replaceTheme) => {
        setCurrentLanguage(languages[lang]);
        if (replaceTheme)  replaceTheme(theme(languages[lang].fontConfig));
        storage.save(storage.KEYS.LANGUAGE,lang)
    }

    return (
        <LanguageContext.Provider
            value={{
                isRTL: currentLanguage.isRTL,
                fontConfig: currentLanguage.fontConfig,
                getString,
                changeLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    )
}

export { LanguageContext, LanguageProvider,languages }


