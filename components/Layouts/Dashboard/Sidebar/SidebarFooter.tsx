import React, { useEffect, useState } from 'react'
import { useLocalizationContext } from '../../../../context/LocalizationContext/LocalizationContext'
import LanguageIcon from '../../../Icons/LanguageIcon'
import MoonImage from '../../../Icons/MoonImage'
import SunImage from '../../../Icons/SunImage'
import styles from './SidebarFooter.module.css'

const SidebarFooter = () => {
  const { t, currentLanguage, changeLanguage } = useLocalizationContext()
  const [languageOption, setLanguageOption] = useState(null)
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    setLanguageOption(currentLanguage)

    const theme = window.localStorage.getItem('etp-theme') || 'dark'
    setTheme(theme)
    window.document.documentElement.setAttribute('data-theme', theme)
  }, [])

  const selectLanguageHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(e.target.value)
    setLanguageOption(e.target.value)
  }
  const selectThemeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value)
    window.localStorage.setItem('etp-theme', e.target.value)
    window.document.documentElement.setAttribute('data-theme', e.target.value)
  }

  if (!languageOption || !theme) {
    return null
  }

  return (
    <div className={styles.container}>
      <div className={styles.select}>
        <span className={styles.icon}>
          <LanguageIcon />
        </span>
        <select
          value={languageOption}
          name="languages"
          aria-labelledby="select language"
          onChange={e => selectLanguageHandler(e)}
        >
          <option value="tr">Türkçe</option>
          <option value="en">English</option>
        </select>
      </div>

      <div className={styles.select}>
        <span className={styles.icon}>{theme === 'dark' ? <MoonImage /> : <SunImage />}</span>
        <select
          value={theme}
          name="color themes"
          aria-labelledby="select color theme"
          onChange={e => selectThemeHandler(e)}
        >
          <option value="dark">{t.common.dark_theme}</option>
          <option value="light">{t.common.light_theme}</option>
        </select>
      </div>
    </div>
  )
}

export default SidebarFooter
