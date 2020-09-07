import React from 'react'
import styles from './NotificationList.module.css'
import ThreeDot from '../Icons/ThreeDot'

interface Props {
  text: string
  icon: JSX.Element
  date: string
}
const NotificationListItem = ({ text, icon, date }: Props) => {
  return (
    <li className={styles.item}>
      <div className={styles.icon}>{icon}</div>
      <p className={styles.date}>{date}</p>
      <p className={styles.text}>{text}</p>
      <div className={styles.threeDot}>
        <ThreeDot />
      </div>
    </li>
  )
}

export default NotificationListItem
