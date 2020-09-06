import React from 'react'
import styles from './PillChart.module.css'
import PillChartItem from './PillChartItem'

const PillChart = () => {
  return (
    <div className={styles.section}>
      <h1 className={styles.title}>Most Active Hours</h1>
      <div className={styles.list}>
        <PillChartItem count={2} legend={'10:00 AM'}></PillChartItem>
        <PillChartItem count={6} legend={'11:00 AM'}></PillChartItem>
        <PillChartItem count={7} legend={'12:00 PM'}></PillChartItem>
        <PillChartItem count={4} legend={'01:00 PM'}></PillChartItem>
        <PillChartItem count={3} legend={'02:00 PM'}></PillChartItem>
        <PillChartItem count={2} legend={'03:00 PM'}></PillChartItem>
      </div>
    </div>
  )
}

export default PillChart
