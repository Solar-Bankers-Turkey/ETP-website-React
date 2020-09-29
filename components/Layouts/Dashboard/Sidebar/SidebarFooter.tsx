import React, { useState } from 'react'
import { useLocalizationContext } from '../../../../context/LocalizationContext/LocalizationContext'
import LanguageIcon from '../../../Icons/LanguageIcon'
import styles from './SidebarFooter.module.css'

const SidebarFooter = () => {
  const { currentLanguage, changeLanguage } = useLocalizationContext()
  const [languageOption, setLanguageOption] = useState(currentLanguage)

  const selectLanguageHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguageOption(e.target.value)
    changeLanguage(e.target.value)
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
    </div>
  )
}

export default SidebarFooter
