import React from 'react'

import styles from './Dropdown.module.css'

const DropdownButton = ({ children }) => {
  return <summary className={styles.summary}>{children}</summary>
}

export default DropdownButton
