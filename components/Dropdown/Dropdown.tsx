import React, { useRef } from 'react'

import styles from './Dropdown.module.css'
import { useOnClickOutside } from '../../hooks/useClickOutside'

interface Props {
  isOpen: boolean
  children: React.ReactNode
  topOffset?: string
  rightOffset?: string
  leftOffset?: string

  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  closeAction: React.Dispatch<React.SetStateAction<boolean>>
}
const Dropdown = ({ isOpen, children, topOffset, rightOffset, leftOffset, closeAction, onClick }: Props) => {
  const ref = useRef()

  useOnClickOutside(ref, () => {
    closeAction(false)
  })
  const onClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    closeAction(false)
  }
  if (!isOpen) return null
  return (
    <div className={styles.container} onClick={e => onClickHandler(e)}>
      <div ref={ref} style={{ top: topOffset, right: rightOffset, left: leftOffset }} className={styles.list_container}>
        {children}
      </div>
    </div>
  )
}

export default Dropdown
