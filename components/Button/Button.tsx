import React from 'react'
import styles from './Button.module.css'
import cx from 'classnames'
interface Props {
  children?: React.ReactNode
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  style?: React.CSSProperties
  variant?: 'ghost' | 'primary-contained' | 'selected'
}

const Button = ({ children, className, onClick, variant }: Props) => {
  return (
    <button onClick={onClick} className={cx(styles.container, className, styles[variant])}>
      {children}
    </button>
  )
}

export default Button
