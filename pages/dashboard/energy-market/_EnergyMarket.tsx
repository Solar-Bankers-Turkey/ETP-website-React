import React from 'react'
import Table from '../../../components/Table/Table'
import FabButton from '../../../components/Button/FabButton'
import styles from './EnergyMarket.module.css'
import mockData from './mockData.json'
import { useLocalizationContext } from '../../../context/LocalizationContext/LocalizationContext'
import PageHeader from '../_components/PageHeader'

const EnergyMarket = () => {
  const { t } = useLocalizationContext()
  return (
    <div className={styles.container}>
      <PageHeader>
        <h1>{t.pageNames.energy_market}</h1>
        <FabButton />
      </PageHeader>
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
