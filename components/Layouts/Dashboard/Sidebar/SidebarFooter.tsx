import React from 'react'
import styles from './SidebarFooter.module.css'
import LanguageIcon from '../../../Icons/LanguageIcon'

const SidebarFooter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.change_langugage}>
        <LanguageIcon />
      </div>
    </div>
  )
}

export default SidebarFooter
