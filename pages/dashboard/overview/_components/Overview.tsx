import React from 'react'
import Info from './Info/Info'
import styles from './Overview.module.css'
import LineChart from './LineChart/LineChart'
import BarChart from './BarChart/BarChart'
const Overview = () => {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h1>Overview</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.o_info_container}>
          <Info />
        </div>
        <div className={styles.o_chart_container}>
          <h1>energy balance this week</h1>
          <LineChart />
        </div>
        <div className={styles.o_weather_container}>
          <BarChart />
        </div>
      </div>
    </div>
  )
}

export default Overview
