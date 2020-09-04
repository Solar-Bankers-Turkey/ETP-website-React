import React from 'react'
import styles from './Header.module.css'
import BarsIcon from '../../../icons/BarsIcon'
import LockIcon from '../../../icons/LockIcon'
import SolarPanelIcon from '../../../icons/SolarPanelIcon'
import BatteryIcon from '../../../icons/BatteryIcon'
import QuestionIcon from '../../../icons/QuestionIcon'
import MailIcon from '../../../icons/MailIcon'
import BellIcon from '../../../icons/BellIcon'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar_toggle}>
        <BarsIcon />
      </div>
      <div className={styles.coin_container}>
        <div className={styles.lock_icon}>
          <LockIcon></LockIcon>
        </div>
        <span className={styles.coin_amount}>50.000</span>
        <span className={styles.coin_name}>IYTECOIN</span>
        <button className={styles.btn_reload}>RELOAD</button>
      </div>
      <div className={styles.energy_container}>
        <div className={styles.solar_icon}>
          <SolarPanelIcon />
        </div>
        <div className={styles.solar_value}>2.6</div>
        <div className={styles.solar_text}>KWH</div>

        <div className={styles.battery_icon}>
          <BatteryIcon />
        </div>
        <div className={styles.battery_indicator}>
          <div className={styles.battery_fill}></div>
        </div>
      </div>
      <div className={styles.btn_group}>
        <div className={styles.icon_button}>
          <QuestionIcon></QuestionIcon>
        </div>
        <div className={styles.icon_button}>
          <MailIcon></MailIcon>
        </div>
        <div className={styles.icon_button}>
          <BellIcon></BellIcon>
        </div>
        <div className={styles.btn_username}>Username</div>
      </div>
    </div>
  )
}

export default Header
