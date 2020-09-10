import React from 'react'
import Nav from './Nav'

import styles from './Settings.module.css'

const Settings = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Settings</h1>
      </div>
      <div className={styles.content}>
        <Nav></Nav>
        <section>{children}</section>
      </div>
    </div>
  )
}

export default Settings
