import React from 'react';
import { createContext, useState } from "react";

import en from '../lang/en.json';
import fa from '../lang/fa.json';

import fontConfigs from '../style/fontConfigs';
import theme from '../style/rnElementsTheme'
import storage from '../utility/storage';

const LanguageContext = createContext();

const languages = {
    "en": {
        resource: en,
        fontConfig: fontConfigs.en,
        isRTL: false
    },
    "fa": {
        resource: fa,
        fontConfig: fontConfigs.fa,
        isRTL: true
    }
}

const LanguageProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState(languages['en']);

    const getString = (key) => currentLanguage.resource[key] || "Undefined String"
    const changeLanguage = (lang, replaceTheme) => {
        setCurrentLanguage(languages[lang]);
        if (replaceTheme) replaceTheme(theme(languages[lang].fontConfig));
        storage.save(storage.KEYS.LANGUAGE, lang)
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

export { LanguageContext, LanguageProvider, languages }


