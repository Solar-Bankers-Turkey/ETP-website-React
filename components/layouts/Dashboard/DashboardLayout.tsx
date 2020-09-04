import React from 'react'
import styles from './DashboardLayout.module.css'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

const DashboardLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header></Header>
      <Sidebar></Sidebar>
      <div style={{ gridArea: 'db-content' }}>{children}</div>
    </div>
  )
}

export default DashboardLayout
