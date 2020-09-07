import React from 'react'

import styles from './DeviceStatusSection.module.css'
import Table from '../../../../../components/Table/Table'

const rowData = [['Ege', 'TFTC - Urla', 'Data sending', 'a363a35d658df8d5', 'relay 3', 'Clima 05', '20.07.2020']]
const headData = [
  'district name',
  'branch name',
  'status info',
  'modem serial number',
  'material serial number',
  'meter name',
  'last read date',
]
const DeviceStatusSection = () => {
  return (
    <div className={styles.container}>
      <Table rowData={rowData} headData={headData}></Table>
    </div>
  )
}

export default DeviceStatusSection
