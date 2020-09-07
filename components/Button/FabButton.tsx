import React from 'react'
import styles from './FabButton.module.css'

const FabButton = () => {
  return (
    <button className={styles.container}>
      <svg fill="currentColor" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
      </svg>
    </button>
  )
}

export default FabButton
