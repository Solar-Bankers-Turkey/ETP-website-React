import React from 'react'
import styles from './Overview.module.css'
import DonutChart from '../../../components/Charts/DonutChart/DonutChart'
import PillChart from '../../../components/Charts/PillChart/PillChart'
import NotificationList from '../../../components/NotificationList/NotificationList'
const Overview = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>History of Activities</div>

      <div className={styles.chart1}>
        <DonutChart />
      </div>

      <div className={styles.chart2}>
        <PillChart />
      </div>

      <div className={styles.info}>
        <NotificationList />
      </div>
    </div>
  )
}

export default Overview
