import React from 'react'
import Info from './Info/Info'
import styles from './Overview.module.css'
import LineChart from './LineChart/LineChart'
import BarChart from './BarChart/BarChart'
import SunImage from '../../../../components/Icons/SunImage'
import { useLocalizationContext } from '../../../../context/LocalizationContext/LocalizationContext'
const Overview = () => {
  const { t } = useLocalizationContext()

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h1>{t.pageNames.overview}</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.o_info_container}>
          <Info />
        </div>
        <div className={styles.o_chart_container}>
          <h1>{t.common.energy_balance_this_week}</h1>
          <LineChart />
        </div>

        <div className={styles.weather_section}>
          <div className={styles.weather_section_header}>
            <h1>{t.common.today_weather_report}</h1>
            <h2>{t.common.weekly_weather_report}</h2>
          </div>
          <div className={styles.weather_cart_group}>
            <div className={styles.current_weather_container}>
              <div className={styles.current_weather_card}>
                <div className={styles.sun_image}>
                  <SunImage />
                </div>
                <div className={styles.text_group}>
                  <h1>32.3 ℃</h1>
                  <h2>Clear Sky</h2>
                </div>
              </div>
            </div>
            <div className={styles.weather_chart_container}>
              <BarChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
