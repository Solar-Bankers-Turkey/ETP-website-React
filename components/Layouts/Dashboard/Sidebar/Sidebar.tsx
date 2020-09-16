import React from 'react'
import styles from './Sidebar.module.css'
import NavLink from './NavLink'
import { dashboardLinks } from '../../../../utils/dashboardLinks'
import HomeIcon from '../../../Icons/HomeIcon'
import StatisticIcon from '../../../Icons/StatisticIcon'
import RefreshIcon from '../../../Icons/RefreshIcon'
import SettingsIcon from '../../../Icons/SettingsIcon'
import ChainIcon from '../../../Icons/ChainIcon'
import SolarPanelIcon from '../../../Icons/SolarPanelIcon'
import { useLocalizationContext } from '../../../../context/LocalizationContext/LocalizationContext'
import LanguageIcon from '../../../Icons/LanguageIcon'

const Sidebar = () => {
  const { t } = useLocalizationContext()
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
          <NavLink icon={<HomeIcon />} url={dashboardLinks.overview} text={t.pageNames.overview}></NavLink>
          <NavLink
            icon={<SolarPanelIcon />}
            url={dashboardLinks.energy_market}
            text={t.pageNames.energy_market}
          ></NavLink>
          <NavLink
            icon={<StatisticIcon />}
            url={dashboardLinks.iot_device_status}
            text={t.pageNames.iot_device_status}
          ></NavLink>
          <NavLink icon={<RefreshIcon />} url={dashboardLinks.history} text={t.pageNames.history}></NavLink>
          <NavLink icon={<SettingsIcon />} url={dashboardLinks.settings} text={t.pageNames.settings}></NavLink>
          <NavLink icon={<ChainIcon />} url={dashboardLinks.solar_node} text={t.pageNames.solar_node}></NavLink>
        </ul>
      </nav>
      <div className={styles.changeLanguage}>
        <LanguageIcon />
      </div>
    </div>
  )
}

export default Sidebar
