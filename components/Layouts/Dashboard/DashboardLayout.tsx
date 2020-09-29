import React, { useState, useEffect, useRef } from 'react'
import styles from './DashboardLayout.module.css'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import SidebarFooter from './Sidebar/SidebarFooter'

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true)

  const sidebarToggleHandler = () => {
    setSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className={styles.container}>
      <div className={isSidebarOpen ? styles.sidebar : styles.sidebar_closed}>
        <Sidebar></Sidebar>

        {isSidebarOpen && <SidebarFooter />}
      </div>

      <div className={styles.body}>
        <div className={styles.header}>
          <Header sidebarToggleHandler={sidebarToggleHandler}></Header>
        </div>
        <main className={styles.content}>{children}</main>
      </div>

      <div
        onClick={() => setSidebarOpen(false)}
        className={isSidebarOpen ? styles.backdrop : styles.backdrop_off}
      ></div>
    </div>
  )
}

export default DashboardLayout
