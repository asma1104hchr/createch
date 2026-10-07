import React, { createContext, useContext, useState } from 'react';
import { translations, defaultLang } from './translations';

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState(defaultLang);
  const t = translations[lang];
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
