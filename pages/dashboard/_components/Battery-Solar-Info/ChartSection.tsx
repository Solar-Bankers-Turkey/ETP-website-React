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
        <CustomLineChart margin={{ top: 20, right: 30, bottom: 70, left: 50 }} dataSeries={mockData} />
      </div>
    </section>
  )
}

export default ChartSection
