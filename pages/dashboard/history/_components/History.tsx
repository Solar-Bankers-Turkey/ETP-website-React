import React from 'react'
import styles from './History.module.css'
import ChartSection from './ChartSection/ChartSection'
import NotificationList from '../../../../components/NotificationList/NotificationList'
import { useLocalizationContext } from '../../../../context/LocalizationContext/LocalizationContext'

const History = () => {
  const { t } = useLocalizationContext()

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{t.pageNames.history}</h1>
      <ChartSection />
      <NotificationList />
    </div>
  )
}

export default History
