import React from 'react'
import styles from './IconButton.module.css'

interface Props {
  badge?: boolean
  icon: JSX.Element
  badgeText?: number
  badgeColor?: string
  children?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
const IconButton: React.FC<Props> = ({
  badgeColor = 'var(--primary-color)',
  icon,
  badge = false,
  badgeText,
  children,
  onClick,
}: Props) => {
  return (
    <div className={styles.container} onClick={onClick}>
      {icon}
      {badge && (
        <span style={{ background: badgeColor }} className={styles.badge}>
          {badgeText}
        </span>
      )}
      {children}
    </div>
  )
}

export default IconButton
