import React from 'react'
import styles from './PillChart.module.css'
import Pill from './Pill'
interface Props {
  count: number
  legend: string
}
const PillChartItem = ({ count, legend }: Props) => {
  return (
    <div className={styles.item}>
      <div className={styles.pills}>
        {Array.from({ length: 9 }).map((_, i) => {
          return <Pill key={i} filled={9 - i <= count} />
        })}
      </div>
      <h1 className={styles.legend}>{legend}</h1>
    </div>
  )
}

export default PillChartItem
