import React from 'react'
import { useLocalizationContext } from '../../../../context/LocalizationContext/LocalizationContext'
import PageHeader from '../../_components/PageHeader'

import styles from './Battery.module.css'
import CardList from './CardList/CardList'
import CardRowList from './CardList/CardRowList'

const Battery = () => {
  const { t } = useLocalizationContext()
  return (
    <div className={styles.container}>
      <PageHeader>
        <h1 className={styles.title}>
          {t.battery_page.battery}&nbsp;
          {t.battery_page.status}&nbsp;:&nbsp;
          <span>{t.battery_page.discharging}</span>
        </h1>
      </PageHeader>
      <CardList />
      <CardRowList />
    </div>
  )
}

export default Battery
