import React, { createContext, useState, useContext, useEffect } from 'react'
import { en } from './locales/en'
import { tr } from './locales/tr'

const languages = {
  tr: tr,
  en: en,
}

export const LocalizationContext = createContext(undefined)

let language = 'en'
if (typeof window !== 'undefined' && window.localStorage !== null) {
  const preferedLanguage = window.localStorage.getItem('etp-language')
  language = preferedLanguage || window.navigator['userLanguage'] || window.navigator.language
  if (!language) {
    language = 'en'
  } else if (language.includes('en')) {
    language = 'en'
  } else if (language.includes('tr')) {
    language = 'tr'
  } else {
    language = 'en'
  }
}

export const LocalizationContextProvider: React.FC = ({ children }) => {
  const [t, setT] = useState(languages[language])

  const [currentLanguage, setCurrentLanguage] = useState(language)

  const changeLanguage = (lang: string) => {
    setT(languages[lang])
    setCurrentLanguage(lang)
    window.localStorage.setItem('etp-language', lang)
  }
  return (
    <LocalizationContext.Provider value={{ t, currentLanguage, changeLanguage }}>
      {children}
    </LocalizationContext.Provider>
  )
}

export const useLocalizationContext = () => {
  const context = useContext(LocalizationContext)
  if (context === undefined) {
    throw new Error('useLocalizationContext must be used within a LocalizationContextProvider')
  }
  return context
}
