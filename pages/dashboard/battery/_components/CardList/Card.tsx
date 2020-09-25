import React from 'react'
import styles from './Card.module.css'
import cx from 'classnames'
interface Props {
  title?: string
  value?: string
  children?: React.ReactNode
  classNames?: string
}

const Card = ({ title, value, children, classNames }: Props) => {
  return (
    <li className={cx(styles.card, classNames)}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.value}>{value}</h2>
      {children}
    </li>
  )
}

export default Card
