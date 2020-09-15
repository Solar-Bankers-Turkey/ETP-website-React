import React, { useState, useEffect, useRef } from 'react'
import styles from './DashboardLayout.module.css'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true)

  const sidebarToggleHandler = () => {
    setSidebarOpen(!isSidebarOpen)
  }

  // useEffect(() => {
  //   window.addEventListener('resize', handleResize)

  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  //   function handleResize() {
  //     if (window.innerWidth < 1250 && isSidebarOpen) {
  //       setSidebarOpen(false)
  //     }
  //   }
  // }, [])

  return (
    <div className={styles.container}>
      <div className={isSidebarOpen ? styles.sidebar : styles.sidebar_closed}>
        <Sidebar></Sidebar>
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
