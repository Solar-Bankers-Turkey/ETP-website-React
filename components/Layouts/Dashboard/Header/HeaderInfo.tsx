import React from 'react'
import LockIcon from '../../../Icons/LockIcon'
import SolarPanelIcon from '../../../Icons/SolarPanelIcon'
import BatteryIcon from '../../../Icons/BatteryIcon'
import styles from './Header.module.css'
import { useLocalizationContext } from '../../../../context/LocalizationContext/LocalizationContext'
import Link from 'next/link'

const HeaderInfo = () => {
  const { t } = useLocalizationContext()
  return (
    <div className={styles.info_container}>
      <div className={styles.coin_container}>
        <div className={styles.lock_icon}>
          <LockIcon></LockIcon>
        </div>
        <span className={styles.coin_amount}>50.000</span>
        <span className={styles.coin_name}>IYTECOIN</span>
        <button className={styles.btn_reload}>{t.common.reload}</button>
      </div>

      <div className={styles.energy_container}>
        <div className={styles.solar_icon}>
          <SolarPanelIcon />
        </div>
        <div className={styles.solar_value}>2.6</div>
        <div className={styles.solar_text}>KWH</div>
      </div>
      <Link href="/dashboard/battery">
        <div className={styles.battery_container}>
          <div className={styles.battery_icon}>
            <BatteryIcon />
          </div>
          <span className={styles.battery_number}>50%</span>
          <div className={styles.battery_indicator}>
            <div className={styles.battery_fill}></div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default HeaderInfo
