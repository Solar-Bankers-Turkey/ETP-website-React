import React from 'react'

import styles from './Dropdown.module.css'
const DropdownItem = ({ children }) => {
  return <li className={styles.item}>{children}</li>
}

export default DropdownItem
