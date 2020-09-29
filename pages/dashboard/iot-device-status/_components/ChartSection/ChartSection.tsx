import React, { useState, useEffect } from 'react'
import Button from '../../../../../components/Button/Button'
import DonutChart from './DonutChart'
import CustomLineChart from '../../../../../components/Charts/LineChart/CustomLineChart'

import styles from './ChartsSection.module.css'

import data1 from './moctData_1.json'
import data2 from './moctData_2.json'
import data3 from './moctData_3.json'
import data4 from './moctData_4.json'
import { useLocalizationContext } from '../../../../../context/LocalizationContext/LocalizationContext'
const dataSeries = {
  day: data1,
  week: data2,
  month: data3,
  year: data4,
}
const ChartSection = () => {
  const { t } = useLocalizationContext()
  const [selected, setSelected] = useState('day')
  const [data, setData] = useState(dataSeries[selected])
  useEffect(() => {
    setData(dataSeries[selected])
  }, [selected])
  return (
    <div className={styles.container}>
      <div className={styles.charts}>
        <div className={styles.charts_header}>
          <h1>{t.common.energy_consumption}</h1>
          <div className={styles.btn_group}>
            <Button onClick={() => setSelected('day')} variant={selected === 'day' ? 'selected' : 'ghost'}>
              {t.common.day}
            </Button>
            <Button onClick={() => setSelected('week')} variant={selected === 'week' ? 'selected' : 'ghost'}>
              {t.common.week}
            </Button>
            <Button onClick={() => setSelected('month')} variant={selected === 'month' ? 'selected' : 'ghost'}>
              {t.common.month}
            </Button>
            <Button onClick={() => setSelected('year')} variant={selected === 'year' ? 'selected' : 'ghost'}>
              {t.common.year}
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
            <CustomLineChart
              margin={{ top: 10, right: 30, bottom: 70, left: 50 }}
              dataSeries={data}
              colors={['#0cb680', '#e19c52', '#784097', '#d24342']}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChartSection
