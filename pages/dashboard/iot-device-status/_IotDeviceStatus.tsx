import React, { useState } from 'react'

import styles from './IotDeviceStatus.module.css'
import LineChart from '../../../components/Charts/LineChart/LineChart'
import DonutChart from './_DonutChart'

const IotDeviceStatus = () => {
  return (
    <div className={styles.container}>
      <h1>IOT Device Status</h1>
      <div className={styles.status}></div>
      <div className={styles.charts}>
        <div className={styles.charts_header}>
          <h1>Energy Consumption</h1>
        </div>
        <div className={styles.charts_group}>
          <div className={styles.donut_section}>
            <DonutChart name="Living Room" valuePercentage={20} valueText="1034" color="#0cb680" />
            <DonutChart name="Living Room" valuePercentage={20} valueText="1034" color="#e19c52" />
            <DonutChart name="Living Room" valuePercentage={20} valueText="1034" color="#d24342" />
            <DonutChart name="Living Room" valuePercentage={20} valueText="1034" color="#784097" />
          </div>

          <div className={styles.line_container}>
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default IotDeviceStatus
