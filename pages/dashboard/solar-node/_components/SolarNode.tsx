import React from 'react'
import styles from './SolarNode.module.css'
import Table from '../../../../components/Table/Table'
import mockData from './mockData.json'
import { useLocalizationContext } from '../../../../context/LocalizationContext/LocalizationContext'
import PageHeader from '../../_components/PageHeader'
const SolarNode = () => {
  const { t } = useLocalizationContext()
  return (
    <div className={styles.container}>
      <PageHeader>
        <h1>Solar Nodes</h1>
      </PageHeader>
      <Table
        action={() => alert('clicked')}
        actionName={t.form.add_to_my_wallet}
        headData={mockData.headData}
        rowData={mockData.rowData}
      />
    </div>
  )
}

export default SolarNode
