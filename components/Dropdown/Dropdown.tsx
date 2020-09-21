import React from 'react'

import styles from './Dropdown.module.css'

const Dropdown = ({ children }) => {
  return <details className={styles.details}>{children}</details>
}

export default Dropdown
