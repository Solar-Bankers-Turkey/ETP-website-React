import React, { useRef } from 'react'

import cx from 'classnames'
import styles from './Header.module.css'
import Link from 'next/link'
import { useLocalizationContext } from '../../../context/LocalizationContext/LocalizationContext'
import LanguageIcon from '../../../components/Icons/LanguageIcon'
import Dropdown from '../../../components/Dropdown/Dropdown'
import DropdownButton from '../../../components/Dropdown/DropdownButton'
import DropdownMenu from '../../../components/Dropdown/DropdownMenu'
import DropdownItem from '../../../components/Dropdown/DropdownItem'

const Header = () => {
  const { t, changeLanguage } = useLocalizationContext()
  const btnChangeLanguageRef = useRef(null) as React.MutableRefObject<HTMLElement>

  const changeLanguageHandler = (lang: string) => {
    changeLanguage(lang)
    btnChangeLanguageRef.current.click()
  }
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <a href="#home">{t.homePage.home}</a>
          </li>
          <li className={styles.list_item}>
            <a href="#about">{t.homePage.about}</a>
          </li>
          <li className={styles.list_item}>
            <a href="#why">{t.homePage.why}</a>
          </li>
          <li className={styles.list_item}>
            <a href="#contact">{t.homePage.contact}</a>
          </li>
          <li className={styles.solid}>
            <Link href="/signin">
              <a>{t.homePage.get_started}</a>
            </Link>
          </li>
          <li className={cx(styles.list_item, styles.language_icon)}>
            <Dropdown>
              {/* @ts-ignore */}
              <DropdownButton ref={btnChangeLanguageRef}>
                <LanguageIcon />
              </DropdownButton>
              <DropdownMenu offsetRight={-50}>
                <DropdownItem onClick={() => changeLanguageHandler('tr')}>Türkçe</DropdownItem>
                <DropdownItem onClick={() => changeLanguageHandler('en')}>
                  <span>English</span>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
