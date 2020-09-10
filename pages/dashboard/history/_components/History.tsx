import React from 'react'
import styles from './History.module.css'
import ChartSection from './ChartSection/ChartSection'
import NotificationList from '../../../../components/NotificationList/NotificationList'

const History = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>History</h1>
      <ChartSection />
      <NotificationList />
    </div>
  )
}

export default History
