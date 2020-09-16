import React from 'react'

import styles from './Device.module.css'
import Button from '../../../../../components/Button/Button'
import PhoneIcon from '../../../../../components/Icons/PhoneIcon'
import DesktopIcon from '../../../../../components/Icons/DesktopIcon'
import { useLocalizationContext } from '../../../../../context/LocalizationContext/LocalizationContext'

const Device = () => {
  const { t } = useLocalizationContext()
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1>{t.common.device_history}</h1>
          <h3>{t.info.device_not_own}</h3>
        </div>
        <Button variant="primary-contained">{t.form.log_out_all_device}</Button>
      </div>

      <div className={styles.device_list_container}>
        <ul className={styles.device_list}>
          <li className={styles.device_list_item}>
            <div className={styles.logo}>
              <PhoneIcon />
            </div>
            <div className={styles.text_container}>
              <p className={styles.text_1}>Xiaomi Mi 5</p>
              <p className={styles.text_2}>Los Angeles, CA · April 20 at 4:16pm</p>
            </div>
            <Button variant="ghost-outlined">{t.form.logout}</Button>
          </li>
          <li className={styles.device_list_item}>
            <div className={styles.logo}>
              <DesktopIcon />
            </div>
            <div className={styles.text_container}>
              <p className={styles.text_1}>Linux Manjaro 20.1</p>
              <p className={styles.text_2}>Izmir, Turkey April 20 at 4:16pm</p>
            </div>
            <div className={styles.btn_group}></div>
            <Button variant="ghost-outlined">{t.form.logout}</Button>
          </li>
          <li className={styles.device_list_item}>
            <div className={styles.logo}>
              <PhoneIcon />
            </div>
            <div className={styles.text_container}>
              <p className={styles.text_1}>iPhone 11</p>
              <p className={styles.text_2}>Izmir, Turkey April 20 at 4:16pm</p>
            </div>
            <div className={styles.btn_group}></div>
            <Button variant="ghost-outlined">{t.form.logout}</Button>
          </li>
          <li className={styles.device_list_item}>
            <div className={styles.logo}>
              <DesktopIcon />
            </div>
            <div className={styles.text_container}>
              <p className={styles.text_1}>Windows 10 1903</p>
              <p className={styles.text_2}>Izmir, Turkey April 20 at 4:16pm</p>
            </div>
            <div className={styles.btn_group}></div>
            <Button variant="ghost-outlined">{t.form.logout}</Button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Device
