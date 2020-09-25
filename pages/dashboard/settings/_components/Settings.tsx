import React from 'react'
import PageHeader from '../../_components/PageHeader'
import Nav from './Nav'

import styles from './Settings.module.css'

const Settings = ({ children }) => {
  return (
    <div className={styles.container}>
      <PageHeader>
        <h1>Settings</h1>
      </PageHeader>
      <div className={styles.content}>
        <Nav></Nav>
        <section>{children}</section>
      </div>
    </div>
  )
}

export default Settings
