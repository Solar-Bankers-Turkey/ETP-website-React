import React from 'react'
import styles from './IconButton.module.css'

interface Props {
  id?: string
  badge?: boolean
  icon: JSX.Element
  badgeText?: number
  badgeColor?: string
  children?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
const IconButton: React.FC<Props> = ({
  id,
  badgeColor = 'var(--primary-color)',
  icon,
  badge = false,
  badgeText,
  children,
  onClick,
}: Props) => {
  return (
    <div id={id} className={styles.container} onClick={onClick}>
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
