import React, { useState } from 'react'

import indexStyle from '../index.module.css'
import ChartSection from './ChartSection/ChartSection'
import DeviceStatusSection from './DeviceStatusSection/DeviceStatusSection'

const IotDeviceStatus = () => {
  return (
    <div className={indexStyle.container}>
      <h1>IOT Device Status</h1>
      <DeviceStatusSection />
      <ChartSection />
    </div>
  )
}

export default IotDeviceStatus
