import React, { useState } from 'react'
import styles from './Header.module.css'
import BarsIcon from '../../../Icons/BarsIcon'
import LockIcon from '../../../Icons/LockIcon'
import SolarPanelIcon from '../../../Icons/SolarPanelIcon'
import BatteryIcon from '../../../Icons/BatteryIcon'
import MailIcon from '../../../Icons/MailIcon'
import BellIcon from '../../../Icons/BellIcon'
import IconButton from '../../../Button/IconButton'
import Dropdown from '../../../Dropdown/Dropdown'
import DropdownListItem from '../../../Dropdown/DropdownListItem'

interface Props {
  sidebarToggleHandler: () => void
}
const Header = ({ sidebarToggleHandler }) => {
  const [mailDropdown, setMailDropdown] = useState(false)

  const [notificationDropdown, setNotificationDropdown] = useState(false)
  const testClick = () => {
    alert('hahah')
  }
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
        <IconButton
          onClick={() => setMailDropdown(true)}
          badgeColor="var(--blue)"
          badgeText={5}
          badge={true}
          icon={<MailIcon />}
        ></IconButton>
        <Dropdown closeAction={setMailDropdown} topOffset="24px" rightOffset="100px" isOpen={mailDropdown}>
          <DropdownListItem>1</DropdownListItem>
          <DropdownListItem>2</DropdownListItem>
          <DropdownListItem>3</DropdownListItem>
          <DropdownListItem>4</DropdownListItem>
          <DropdownListItem>5</DropdownListItem>
        </Dropdown>

        <IconButton badgeColor="var(--red)" badgeText={11} badge={true} icon={<BellIcon />}></IconButton>
        <div className={styles.btn_username}>Username</div>
      </div>
    </header>
  )
}

export default Header
