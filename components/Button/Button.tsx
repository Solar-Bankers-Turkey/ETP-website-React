import React from 'react'
import styles from './Button.module.css'
import cx from 'classnames'
interface Props {
  children?: React.ReactNode
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  style?: React.CSSProperties
}

const Button = ({ children, className, onClick }: Props) => {
  return (
    <button onClick={onClick} className={cx(styles.container, className)}>
      {children}
    </button>
  )
}

export default Button
