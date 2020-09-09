import React from 'react'
import styles from './index.module.css'
import Nav from './_components/Nav'
import Settings from './_components/Settings'

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Settings</h1>
      </div>
      <div className={styles.content}>
        <Nav></Nav>
        <Settings />
      </div>
    </div>
  )
}

export default index
