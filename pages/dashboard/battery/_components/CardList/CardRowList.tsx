import React from 'react'
import { useLocalizationContext } from '../../../../../context/LocalizationContext/LocalizationContext'
import CardRow from './CardRow'
import styles from './Card.module.css'

const CardRowList = () => {
  const { t } = useLocalizationContext()
  return (
    <ul className={styles.row_container}>
      <CardRow title={t.battery_page.input_freq} value="50 Hz"></CardRow>
      <CardRow title={t.battery_page.input_voltage} value="84.4 V">
        <span className={styles.info_text}>PV</span>
      </CardRow>
      <CardRow title={t.battery_page.battery_voltage} value="108.6 V"></CardRow>
      <CardRow title={t.battery_page.output_voltage} value="220 V"></CardRow>
      <CardRow title={t.battery_page.output_current} value="5.9 A"></CardRow>
      <CardRow title={t.battery_page.output_freq} value="50 Hz"></CardRow>
    </ul>
  )
}

export default CardRowList
