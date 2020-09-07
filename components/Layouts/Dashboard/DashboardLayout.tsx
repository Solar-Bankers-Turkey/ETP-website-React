import React, { useState, useEffect, useRef } from 'react'
import styles from './DashboardLayout.module.css'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import cx from 'classnames'

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true)

  const sidebarToggleHandler = () => {
    setSidebarOpen(!isSidebarOpen)
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
    function handleResize() {
      if (window.innerWidth < 1250 && isSidebarOpen) {
        setSidebarOpen(false)
      }
    }
  }, [])

  return (
    <div className={isSidebarOpen ? styles.container_sidebarOpen : styles.container_sidebarClosed}>
      <div className={styles.header}>
        <Header sidebarToggleHandler={sidebarToggleHandler}></Header>
      </div>

      <div className={cx(styles.sidebar)}>
        <Sidebar></Sidebar>
      </div>

      <main className={styles.content}>{children}</main>

      <footer className={styles.footer}></footer>
      <div
        onClick={() => setSidebarOpen(false)}
        className={isSidebarOpen ? styles.backdrop : styles.backdrop_off}
      ></div>
    </div>
  )
}

export default DashboardLayout
