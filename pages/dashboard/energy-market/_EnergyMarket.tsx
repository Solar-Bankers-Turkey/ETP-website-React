import React from 'react'
import Table from '../../../components/Table/Table'
import FabButton from '../../../components/Button/FabButton'
import styles from './EnergyMarket.module.css'
import mockData from './mockData.json'
import { useLocalizationContext } from '../../../context/LocalizationContext/LocalizationContext'

const EnergyMarket = () => {
  const { t } = useLocalizationContext()
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{t.pageNames.energy_market}</h1>
        <FabButton />
      </div>
      <Table
        rowData={mockData.rowData}
        headData={mockData.headData}
        action={() => alert('clicked')}
        actionName="BUY"
      ></Table>
    </div>
  )
}

export default EnergyMarket
