import React from 'react'
import SolarPanelIcon from '../../../../components/Icons/SolarPanelIcon'
import { useLocalizationContext } from '../../../../context/LocalizationContext/LocalizationContext'
import Card from '../../_components/Battery-Solar-Info/Card'
import CardList from '../../_components/Battery-Solar-Info/CardList'
import CardRow from '../../_components/Battery-Solar-Info/CardRow'
import CardRowList from '../../_components/Battery-Solar-Info/CardRowList'
import ChartSection from '../../_components/Battery-Solar-Info/ChartSection'
import PageHeader from '../../_components/PageHeader'
import styles from './Solar.module.css'

const Solar = () => {
  const { t } = useLocalizationContext()
  return (
    <div className={styles.container}>
      <PageHeader>
        <h1 className={styles.title}>{t.solar_page.solar_panel}</h1>
      </PageHeader>
      <CardList>
        <li className={styles.battery_info}>
          <h1>{t.solar_page.dc_power_value}</h1>
          <div className={styles.icon_with_text}>
            <div className={styles.icon}>
              <SolarPanelIcon />
            </div>
            <div className={styles.text_group}>
              <h1>8.4&nbsp;kWh</h1>
            </div>
          </div>
        </li>
        <Card size="big" title={t.solar_page.dc_current_value} value="1.3 kWh"></Card>
        <li className={styles.card_group}>
          <ul>
            <Card title={t.solar_page.tempature} value="32 ℃">
              <span className={styles.temp_status_text}>Normal</span>
            </Card>
            <Card title={t.solar_page.energy_to_battery} value="6 Hours"></Card>
          </ul>
        </li>
      </CardList>
      <CardRowList>
        <CardRow title={t.solar_page.dc_current_value} value="50 Hz"></CardRow>
        <CardRow title={t.solar_page.dc_voltage_value} value="84.4 V">
          <span className={styles.info_text}>PV</span>
        </CardRow>
        <CardRow title={t.solar_page.r_phase_voltage} value="108.6 V"></CardRow>
        <CardRow title={t.solar_page.s_phase_voltage} value="220 V"></CardRow>
        <CardRow title={t.solar_page.t_phase_voltage} value="5.9 A"></CardRow>
        <CardRow title={t.solar_page.r_phase_current} value="50 Hz"></CardRow>
        <CardRow title={t.solar_page.s_phase_current} value="50 Hz"></CardRow>
        <CardRow title={t.solar_page.t_phase_current} value="50 Hz"></CardRow>
      </CardRowList>

      <ChartSection title={t.solar_page.chart_title} />
    </div>
  )
}

export default Solar
