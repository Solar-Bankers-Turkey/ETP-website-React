import React from 'react'
import styles from './PillChart.module.css'
import cx from 'classnames'

interface Props {
  filled: boolean
}
const Pill = ({ filled }: Props) => {
  return <div className={cx(styles.pill, filled ? styles.filled : '')}></div>
}

export default Pill
