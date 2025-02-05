import React from 'react'
import CustomLineChart from '../../../../components/Charts/LineChart/CustomLineChart'
import styles from './ChartSection.module.css'
import mockData from './mockData.json'

interface Props {
  title: string
}

const ChartSection = ({ title }) => {
  return (
    <section className={styles.chart_setion}>
      <h1>{title}</h1>
      <div className={styles.linechart_container}>
        <CustomLineChart
          lineCurve="monotoneX"
          enableArea={true}
          showLegend={false}
          margin={{ top: 10, right: 30, bottom: 40, left: 50 }}
          dataSeries={mockData}
        />
      </div>
    </section>
  )
}

export default ChartSection
