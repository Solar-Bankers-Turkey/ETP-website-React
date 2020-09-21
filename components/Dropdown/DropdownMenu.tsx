import React from 'react'

import styles from './Dropdown.module.css'
interface Props {
  children: React.ReactNode
  offsetRight?: number
}
const DropdownMenu = ({ children, offsetRight = 0 }) => {
  return (
    <ul style={{ transform: `translateX(${offsetRight}px)` }} className={styles.menu}>
      {children}
    </ul>
  )
}

export default DropdownMenu
