import React from 'react'

import styles from './Card.module.css'

interface Props {
  title?: string
  value?: string
  children?: React.ReactNode
  classNames?: string
}
const CardRow = ({ title, value, children, classNames }: Props) => {
  return (
    <li className={styles.row_card}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.value}>{value}</h2>
      {children}
    </li>
  )
}

export default CardRow
