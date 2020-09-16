import React from 'react'
import styles from './AuthLayout.module.css'
import { useLocalizationContext } from '../../../context/LocalizationContext/LocalizationContext'

const AuthLayout = ({ children }) => {
  const { t } = useLocalizationContext()
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.image_container}>
          <div className={styles.text_group}>
            <p className={styles.text_1}>{t.info.get_green}</p>
            <p className={styles.text_2}>{t.info.and_sell}</p>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.right_container}>
          <div className={styles.logo}>
            <img src="/logo/solar-bankers-logo.png" alt="Solar Bankers Logo" />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
