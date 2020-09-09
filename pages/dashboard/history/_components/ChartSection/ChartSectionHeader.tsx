import React, { useState } from 'react'

import styles from './ChartSection.module.css'
import BarChartIcon from '../../../../../components/Icons/BarChartIcon'
import TimeLineIcon from '../../../../../components/Icons/TimeLineIcon'
import Button from '../../../../../components/Button/Button'

interface Props {
  chartType: 'bar' | 'line'
  setChartType: React.Dispatch<React.SetStateAction<string>>
}
const BarChartHeader = ({ chartType, setChartType }: Props) => {
  const [chartRange, setChartRange] = useState('day')
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>History Of Activities</h1>
      <div className={styles.icon_group}>
        <div onClick={() => setChartType('bar')}>
          <BarChartIcon color={chartType === 'bar' ? 'var(--primary-color)' : 'currentColor'} />
        </div>
        <div onClick={() => setChartType('line')}>
          <TimeLineIcon color={chartType === 'line' ? 'var(--primary-color)' : 'currentColor'} />
        </div>
      </div>
      <div className={styles.btn_group}>
        <Button onClick={() => setChartRange('day')} variant={chartRange === 'day' ? 'selected' : 'ghost'}>
          day
        </Button>
        <Button onClick={() => setChartRange('week')} variant={chartRange === 'week' ? 'selected' : 'ghost'}>
          week
        </Button>
        <Button onClick={() => setChartRange('month')} variant={chartRange === 'month' ? 'selected' : 'ghost'}>
          month
        </Button>
        <Button onClick={() => setChartRange('year')} variant={chartRange === 'year' ? 'selected' : 'ghost'}>
          year
        </Button>
      </div>
    </div>
  )
}

export default BarChartHeader
