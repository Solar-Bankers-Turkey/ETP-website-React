import React from 'react'
import Table from '../../../components/Table/Table'
import FabButton from '../../../components/Button/FabButton'
import styles from './EnergyMarket.module.css'
import mockData from './mockData.json'

const EnergyMarket = () => {
  return (
    <>
      <div className={styles.header}>
        <h1>Energy Market</h1>
        <FabButton />
      </div>
      <Table rowData={mockData.rowData} headData={mockData.headData} action={true}></Table>
    </>
  )
}

export default EnergyMarket
