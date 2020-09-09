import React from 'react'
import styles from './History.module.css'
import ChartSection from './ChartSection/ChartSection'

const History = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>History</h1>
      <ChartSection />
    </div>
  )
}

export default History
