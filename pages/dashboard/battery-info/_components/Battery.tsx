import React from 'react'
import { useLocalizationContext } from '../../../../context/LocalizationContext/LocalizationContext'
import PageHeader from '../../_components/PageHeader'

import styles from './Battery.module.css'
import CardList from '../../_components/Battery-Solar-Info/CardList'
import CardRowList from '../../_components/Battery-Solar-Info/CardRowList'
import BatteryIcon from '../../../../components/Icons/BatteryIcon'
import Card from '../../_components/Battery-Solar-Info/Card'
import CardRow from '../../_components/Battery-Solar-Info/CardRow'

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
      <CardList>
        <li className={styles.battery_info}>
          <h1>{t.battery_page.capacity}</h1>
          <div className={styles.icon_with_text}>
            <div className={styles.icon}>
              <BatteryIcon />
            </div>
            <div className={styles.text_group}>
              <h1>%70</h1>
              <h1>8.4&nbsp;kWh</h1>
            </div>
          </div>
        </li>
        <Card size="big" title={t.battery_page.output_power} value="1.3 kWh"></Card>
        <li className={styles.card_group}>
          <ul>
            <Card title={t.battery_page.tempature} value="32 ℃">
              <span className={styles.temp_status_text}>Normal</span>
            </Card>
            <Card title={t.battery_page.remaining_backup_time} value="6 Hours"></Card>
          </ul>
        </li>
      </CardList>
      <CardRowList>
        <CardRow title={t.battery_page.input_freq} value="50 Hz"></CardRow>
        <CardRow title={t.battery_page.input_voltage} value="84.4 V">
          <span className={styles.info_text}>PV</span>
        </CardRow>
        <CardRow title={t.battery_page.battery_voltage} value="108.6 V"></CardRow>
        <CardRow title={t.battery_page.output_voltage} value="220 V"></CardRow>
        <CardRow title={t.battery_page.output_current} value="5.9 A"></CardRow>
        <CardRow title={t.battery_page.output_freq} value="50 Hz"></CardRow>
      </CardRowList>
    </div>
  )
}

export default Battery
