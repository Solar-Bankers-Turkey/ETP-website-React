import React from 'react'

import styles from './Dropdown.module.css'

const DropdownButton = React.forwardRef((props, ref) => {
  return (
    // @ts-ignore
    <summary ref={ref} className={styles.summary}>
      {props.children}
    </summary>
  )
})

export default DropdownButton
