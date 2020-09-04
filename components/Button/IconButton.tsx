import React from 'react'
import styles from './IconButton.module.css'

interface Props {
  badge?: boolean
  icon: JSX.Element
  badgeText?: number
}
const IconButton: React.FC<Props> = ({ icon, badge = false, badgeText }: Props) => {
  return (
    <div className={styles.container}>
      {icon}
      {badge && <span className={styles.badge}>{badgeText}</span>}
    </div>
  )
}

export default IconButton
