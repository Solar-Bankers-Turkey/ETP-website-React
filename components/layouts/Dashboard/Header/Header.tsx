import React from 'react'
import styles from './Header.module.css'
import BarsIcon from '../../../icons/BarsIcon'
import LockIcon from '../../../icons/LockIcon'
import SolarPanelIcon from '../../../icons/SolarPanelIcon'
import BatteryIcon from '../../../icons/BatteryIcon'
import QuestionIcon from '../../../icons/QuestionIcon'
import MailIcon from '../../../icons/MailIcon'
import BellIcon from '../../../icons/BellIcon'
import IconButton from '../../../Button/IconButton'

interface Props {
  sidebarToggleHandler: () => void
}
const Header = ({ sidebarToggleHandler }) => {
  return (
    <header className={styles.container}>
      <div className={styles.sidebar_toggle} onClick={sidebarToggleHandler}>
        <BarsIcon />
      </div>
      <div className={styles.info_container}>
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
        </div>
        <div className={styles.battery_icon}>
          <BatteryIcon />
        </div>
        <div className={styles.battery_indicator}>
          <div className={styles.battery_fill}></div>
        </div>
      </div>
      <div className={styles.btn_group}>
        <IconButton icon={<QuestionIcon />}></IconButton>
        <IconButton icon={<MailIcon />}></IconButton>
        <IconButton badge={true} icon={<BellIcon />}></IconButton>
        <div className={styles.btn_username}>Username</div>
      </div>
    </header>
  )
}

export default Header
