import React from 'react'
import styles from './History.module.css'
import BarChartSection from './BarChart/BarChartSection'

const History = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>History</h1>
      <BarChartSection />
    </div>
  )
}

export default History
