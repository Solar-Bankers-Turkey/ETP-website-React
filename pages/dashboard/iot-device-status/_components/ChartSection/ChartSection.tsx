import React, { useState } from 'react'
import styles from './ChartsSection.module.css'
import Button from '../../../../../components/Button/Button'
import DonutChart from './DonutChart'
import LineChart from './LineChart'

const ChartSection = () => {
  const [selected, setSelected] = useState('day')
  return (
    <div className={styles.container}>
      <div className={styles.charts}>
        <div className={styles.charts_header}>
          <h1>Energy Consumption</h1>
          <div className={styles.btn_group}>
            <Button onClick={() => setSelected('day')} variant={selected === 'day' ? 'selected' : 'ghost'}>
              Day
            </Button>
            <Button onClick={() => setSelected('week')} variant={selected === 'week' ? 'selected' : 'ghost'}>
              Week
            </Button>
            <Button onClick={() => setSelected('month')} variant={selected === 'month' ? 'selected' : 'ghost'}>
              Month
            </Button>
            <Button onClick={() => setSelected('year')} variant={selected === 'year' ? 'selected' : 'ghost'}>
              Year
            </Button>
          </div>
        </div>

        <div className={styles.charts_group}>
          <div className={styles.donut_section}>
            <DonutChart name="Living Room" valuePercentage={20} valueText="1034" color="#0cb680" />
            <DonutChart name="Studio" valuePercentage={20} valueText="1034" color="#e19c52" />
            <DonutChart name="Kitchen" valuePercentage={20} valueText="1034" color="#d24342" />
            <DonutChart name="Kids room" valuePercentage={20} valueText="1034" color="#784097" />
          </div>

          <div className={styles.line_section}>
            <LineChart dataRange={selected} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChartSection
