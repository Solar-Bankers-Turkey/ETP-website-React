import React from 'react'

import styles from './PageHeader.module.css'

const PageHeader = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default PageHeader
