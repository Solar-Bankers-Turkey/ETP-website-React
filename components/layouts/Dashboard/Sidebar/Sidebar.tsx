import React from 'react'
import styles from './Sidebar.module.css'
import NavLink from './NavLink'
import { dashboardLinks } from '../../../../utils/dashboardLinks'
import HomeIcon from '../../../icons/HomeIcon'
import DeviceIcon from '../../../icons/DeviceIcon'
import StatisticIcon from '../../../icons/StatisticIcon'
import ListIcon from '../../../icons/ListIcon'
import RefreshIcon from '../../../icons/RefreshIcon'
import SettingsIcon from '../../../icons/SettingsIcon'
import ChainIcon from '../../../icons/ChainIcon'
import SolarPanel from '../../../icons/SolarPanel'

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>ETP</div>
      <div className={styles.profile}>
        <img
          loading="lazy"
          src="https://pecb.com/conferences/wp-content/uploads/2017/10/no-profile-picture.jpg"
          className={styles.profile_img}
        ></img>
        <div className={styles.profile_title}>Baris</div>
        <div className={styles.profile_subtitle}>Teknopark Izmir</div>
      </div>
      <nav className={styles.nav_container}>
        <ul className={styles.nav_list}>
          <NavLink icon={<HomeIcon />} url={dashboardLinks.overview.url} text={dashboardLinks.overview.name}></NavLink>
          <NavLink
            icon={<SolarPanel />}
            url={dashboardLinks.energy_market.url}
            text={dashboardLinks.energy_market.name}
          ></NavLink>
          <NavLink
            icon={<StatisticIcon />}
            url={dashboardLinks.analytics.url}
            text={dashboardLinks.analytics.name}
          ></NavLink>
          <NavLink icon={<ListIcon />} url={dashboardLinks.rules.url} text={dashboardLinks.rules.name}></NavLink>
          <NavLink icon={<RefreshIcon />} url={dashboardLinks.history.url} text={dashboardLinks.history.name}></NavLink>
          <NavLink
            icon={<SettingsIcon />}
            url={dashboardLinks.settings.url}
            text={dashboardLinks.settings.name}
          ></NavLink>
          <NavLink
            icon={<ChainIcon />}
            url={dashboardLinks.solar_node.url}
            text={dashboardLinks.solar_node.name}
          ></NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
