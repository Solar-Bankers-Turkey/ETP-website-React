import React, { useState } from 'react'

import styles from '../index.module.css'
import ChartSection from './ChartSection/ChartSection'
import DeviceStatusSection from './DeviceStatusSection/DeviceStatusSection'

const IotDeviceStatus = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>IOT Device Status</h1>
      </div>
      <DeviceStatusSection />
      <ChartSection />
    </div>
  )
}

export default IotDeviceStatus
