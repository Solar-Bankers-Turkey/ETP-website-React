import React, { useState } from 'react'
import styles from './HeaderInfoFloating.module.css'

import LockIcon from '../../../Icons/LockIcon'
import SolarPanelIcon from '../../../Icons/SolarPanelIcon'
import BatteryIcon from '../../../Icons/BatteryIcon'
import EnergyIcon from '../../../Icons/EnergyIcon'
import cx from 'classnames'

const HeaderInfoFloating = () => {
  const [activeToggleList, setActiveToggleList] = useState({
    coin: false,
    solar: false,
    battery: false,
    energy_flow: false,
  })

  const toggleHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const name = e.currentTarget.id
    setActiveToggleList({ ...activeToggleList, [name]: !activeToggleList[name] })
  }
  return (
    <div className={styles.container}>
      <div className={styles.coin} id="coin" onClick={e => toggleHandler(e)}>
        <LockIcon />
        <div className={cx(styles.menu, activeToggleList.coin ? '' : styles.menu_closed)}>
          <span className={styles.amount}>50.000</span>
          <span className={styles.name}>IYTECOIN</span>
        </div>
      </div>

      <div className={styles.solar} id="solar" onClick={e => toggleHandler(e)}>
        <SolarPanelIcon />
        <div className={cx(styles.menu, activeToggleList.solar ? '' : styles.menu_closed)}>
          <span className={styles.amount}>2.9</span>
          <span className={styles.name}>kWh</span>
        </div>
      </div>

      <div className={styles.battery} id="battery" onClick={e => toggleHandler(e)}>
        <BatteryIcon />
        <div className={cx(styles.menu, activeToggleList.battery ? '' : styles.menu_closed)}>
          <span className={styles.amount}>50%</span>
          <div className={styles.battery_indicator}>
            <div className={styles.battery_fill}></div>
          </div>
        </div>
      </div>

      <div className={styles.energy} id="energy_flow" onClick={e => toggleHandler(e)}>
        <EnergyIcon />
      </div>
    </div>
  )
}

export default HeaderInfoFloating
