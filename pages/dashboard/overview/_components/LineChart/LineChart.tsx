import React from 'react'
import CustomLineChart from '../../../../../components/Charts/LineChart/CustomLineChart'
import styles from '../Overview.module.css'
const data = [
  {
    id: 'Energy',
    color: 'var(--primary-color)',
    data: [
      {
        x: 'Monday',
        y: 100,
      },
      {
        x: 'Tuesday',
        y: 200,
      },
      {
        x: 'Wednesday',
        y: 700,
      },
      {
        x: 'Thursday',
        y: 100,
      },
      {
        x: 'Friday',
        y: 300,
      },
      {
        x: 'Saturday',
        y: 700,
      },
      {
        x: 'Sunday',
        y: 200,
      },
    ],
  },
]
const LineChart = () => {
  return (
    <div className={styles.line_chart}>
      <CustomLineChart
        showLegend={false}
        margin={{ top: 20, right: 30, bottom: 40, left: 50 }}
        dataSeries={data}
        colors={['var(--primary-color)']}
      />
    </div>
  )
}

export default LineChart
