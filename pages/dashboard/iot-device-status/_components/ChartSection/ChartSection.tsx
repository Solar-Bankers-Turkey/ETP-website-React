import React, { useState } from 'react'
import styles from './ChartsSection.module.css'
import Button from '../../../../../components/Button/Button'
import DonutChart from './DonutChart'
import LineChart from './LineChart'

const ChartSection = () => {
  const [selected, setSelected] = useState('day')
  return (
    <div className={styles.charts}>
      <div className={styles.charts_header}>
        <h1>Energy Consumption</h1>
        <div className={styles.btn_group}>
          <Button onClick={() => setSelected('day')} className={selected === 'day' && styles.btn_selected}>
            Day
          </Button>
          <Button onClick={() => setSelected('week')} className={selected === 'week' && styles.btn_selected}>
            Week
          </Button>
          <Button onClick={() => setSelected('month')} className={selected === 'month' && styles.btn_selected}>
            Month
          </Button>
          <Button onClick={() => setSelected('year')} className={selected === 'year' && styles.btn_selected}>
            Year
          </Button>
        </div>
      </div>
      <div className={styles.charts_group}>
        <div className={styles.donut_section}>
          <DonutChart name="Living Room" valuePercentage={20} valueText="1034" color="#0cb680" />
          <DonutChart name="Living Room" valuePercentage={20} valueText="1034" color="#e19c52" />
          <DonutChart name="Living Room" valuePercentage={20} valueText="1034" color="#d24342" />
          <DonutChart name="Living Room" valuePercentage={20} valueText="1034" color="#784097" />
        </div>

        <div className={styles.line_container}>
          <LineChart />
        </div>
      </div>
    </div>
  )
}

export default ChartSection
