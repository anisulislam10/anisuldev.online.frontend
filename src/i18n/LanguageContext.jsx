import React, { createContext, useContext, useState, useEffect } from 'react';
import i18n from './i18n';

const LanguageContext = createContext();

// Languages that read right-to-left
const RTL_LANGS = ['ar', 'ur'];

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'en');

    useEffect(() => {
        const isRTL = RTL_LANGS.includes(language);
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
        document.documentElement.lang = language;
    }, [language]);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('language', lang);
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
