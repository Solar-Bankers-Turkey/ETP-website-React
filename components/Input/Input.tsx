import React, { useState } from 'react'
import styles from './Input.module.css'

interface Props {
  type: 'text' | 'password' | 'date'
  label: string
}
const Input = ({ type, label }: Props) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className={styles.input_container}>
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} name={label} />
    </div>
  )
}

export default Input
