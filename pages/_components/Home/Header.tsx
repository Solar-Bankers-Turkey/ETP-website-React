import React from 'react'

import cx from 'classnames'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.logo}>
            <img src="/logo/solar-bankers-logo.png" alt="Solar Bankers Logo" />
          </li>
          <li className={styles.list_item}>
            <a href="#home">Home</a>
          </li>
          <li className={styles.list_item}>
            <a href="#about">About</a>
          </li>
          <li className={styles.list_item}>
            <a href="#why">Why</a>
          </li>
          <li className={styles.list_item}>
            <a href="#contact">Contact</a>
          </li>
          <li className={styles.solid}>
            <a>Get Started</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
