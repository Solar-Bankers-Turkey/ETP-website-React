import React from 'react'
import styles from './Input.module.css'
interface Props {
  label: string
}
const Textarea = ({ label }: Props) => {
  return (
    <div className={styles.input_container}>
      <label htmlFor={label}>{label}</label>
      <textarea id={label} name={label} rows={3} />
    </div>
  )
}

export default Textarea
