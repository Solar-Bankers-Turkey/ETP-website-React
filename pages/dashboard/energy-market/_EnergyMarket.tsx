import React from 'react'
import Table from '../../../components/Table/Table'
import FabButton from '../../../components/Button/FabButton'
import styles from './EnergyMarket.module.css'

const EnergyMarket = () => {
  return (
    <>
      <div className={styles.header}>
        <h1>Energy Market</h1>
        <FabButton />
      </div>
      <Table></Table>
    </>
  )
}

export default EnergyMarket
