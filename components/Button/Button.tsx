import React from 'react'
import styles from './Button.module.css'
import cx from 'classnames'
interface Props {
  type?: 'button' | 'submit' | 'reset'
  children?: React.ReactNode
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  style?: React.CSSProperties
  variant?: 'ghost' | 'primary-contained' | 'primary-solid' | 'selected' | 'ghost-outlined'
}

const Button = ({ type = 'button', children, className, onClick, variant }: Props) => {
  return (
    <button type={type} onClick={onClick} className={cx(styles.container, className, styles[variant])}>
      {children}
    </button>
  )
}

export default Button
