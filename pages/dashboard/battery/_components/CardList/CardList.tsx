import React from 'react'
import BatteryIcon from '../../../../../components/Icons/BatteryIcon'
import { useLocalizationContext } from '../../../../../context/LocalizationContext/LocalizationContext'
import Card from './Card'
import styles from './Card.module.css'

const CardList = () => {
  const { t } = useLocalizationContext()
  return (
    <ul className={styles.container}>
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

      <Card classNames={styles.big} title={t.battery_page.output_power} value="1.3 kWh"></Card>

      <li className={styles.card_group}>
        <ul>
          <Card infoText="Normal" title={t.battery_page.tempature} value="32 ℃">
            <span className={styles.temp_status_text}>Normal</span>
          </Card>
          <Card title={t.battery_page.remaining_backup_time} value="6 Hours"></Card>
        </ul>
      </li>
    </ul>
  )
}

export default CardList
