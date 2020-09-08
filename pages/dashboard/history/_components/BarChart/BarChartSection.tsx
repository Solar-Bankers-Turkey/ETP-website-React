import React from 'react'
import BarChartHeader from './BarChartHeader'
import BarChart from './BarChart'

import styles from './BarChartSection.module.css'

const BarChartSection = () => {
  return (
    <div className={styles.section}>
      <BarChartHeader />
      <BarChart />
    </div>
  )
}

export default BarChartSection
