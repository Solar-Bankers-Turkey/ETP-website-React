import React from 'react'

import styles from './Dropdown.module.css'

interface Props {
  onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
  children: React.ReactNode
}

const DropdownItem = ({ children, onClick }: Props) => {
  return (
    <li onClick={onClick} className={styles.item}>
      {children}
    </li>
  )
}

export default DropdownItem
