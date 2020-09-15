import React from 'react'
import styles from './SolarNode.module.css'
import Table from '../../../../components/Table/Table'
import mockData from './mockData.json'
const SolarNode = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Solar Nodes</h1>
      <Table
        action={() => alert('clicked')}
        actionName="Add To My Wallet"
        headData={mockData.headData}
        rowData={mockData.rowData}
      />
    </div>
  )
}

export default SolarNode
