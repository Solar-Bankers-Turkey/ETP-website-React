import React from 'react'

import styles from './Dropdown.module.css'

type Props = {}
const DropdownButton = ({ children }) => {
  return <summary className={styles.summary}>{children}</summary>
}

export default DropdownButton
