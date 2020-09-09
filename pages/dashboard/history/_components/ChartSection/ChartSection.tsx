import React, { useState } from 'react'

import BarChartHeader from './ChartSectionHeader'
import CustomLineChart from '../../../../../components/Charts/LineChart/CustomLineChart'
import CustomBarChart from '../../../../../components/Charts/BarChart/CustomBarChart'

import dataBar from './mockDataBar.json'
import dataLine from './mockDataLine.json'

import styles from './ChartSection.module.css'

const ChartSection = () => {
  const [chartType, setChartType] = useState<'bar' | 'line'>('bar')
  return (
    <div className={styles.section}>
      <BarChartHeader setChartType={setChartType} chartType={chartType} />
      {chartType === 'bar' ? (
        <div className={styles.barchart_container}>
          <CustomBarChart
            dataSeries={dataBar}
            colors={['rgb(31, 142, 250)', 'rgb(255, 255, 255)', 'rgb(5, 201, 133)']}
            keys={['Net Profit', 'Revenue', 'Free Cash Flow']}
          />
        </div>
      ) : (
        <div className={styles.linechart_container}>
          <CustomLineChart
            margin={{ top: 40, right: 30, bottom: 70, left: 50 }}
            dataSeries={dataLine}
            colors={['rgb(31, 142, 250)', 'rgb(255, 255, 255)', 'rgb(5, 201, 133)']}
          />
        </div>
      )}
    </div>
  )
}

export default ChartSection
