import React, { useState } from 'react'

import styles from '../index.module.css'
import ChartSection from './ChartSection/ChartSection'
import DeviceStatusSection from './DeviceStatusSection/DeviceStatusSection'
import { useLocalizationContext } from '../../../../context/LocalizationContext/LocalizationContext'

const IotDeviceStatus = () => {
  const { t } = useLocalizationContext()

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{t.pageNames.iot_device_status}</h1>
      </div>
      <DeviceStatusSection />
      <ChartSection />
    </div>
  )
}

export default IotDeviceStatus
