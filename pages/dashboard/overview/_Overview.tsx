import React from 'react'
import styles from './Overview.module.css'
import DonutChart from '../../../components/Charts/DonutChart/DonutChart'
const Overview = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Overview</div>

      <div className={styles.chart1}>
        <DonutChart />
      </div>

      <div className={styles.chart2}>
        <DonutChart />
      </div>

      <div className={styles.info}></div>
    </div>
  )
}

export default Overview
