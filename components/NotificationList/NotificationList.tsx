import React from 'react'
import styles from './NotificationList.module.css'
import NotificationListItem from './NotificationListItem'
import SettingsIconSolid from '../Icons/SettingsIconSolid'
import WarningIcon from '../Icons/WarningIcon'
import InfoIcon from '../Icons/InfoIcon'

const NotificationList = () => {
  return (
    <ul className={styles.container}>
      <NotificationListItem
        date="12:35, 22 March 2020"
        text="Your battery is full"
        icon={<WarningIcon color="#ffab4f" />}
      />
      <NotificationListItem
        date="12:35, 22 March 2020"
        text="Weekly report is ready"
        icon={<InfoIcon color="#1f8efa" />}
      />
      <NotificationListItem
        date="12:35, 22 March 2020"
        text="Overusage on T phase."
        icon={<WarningIcon color="#ffab4f" />}
      />
      <NotificationListItem
        date="12:35, 22 March 2020"
        text="The daily system backup has been completed and uploaded to the server"
        icon={<SettingsIconSolid color="#05c985" />}
      />
      <NotificationListItem
        date="12:35, 22 March 2020"
        text="Payment option has been changed"
        icon={<SettingsIconSolid color="#05c985" />}
      />
      <NotificationListItem
        date="12:35, 22 March 2020"
        text="System update:the software version 2.1.3 is now available"
        icon={<InfoIcon color="#1f8efa" />}
      />
    </ul>
  )
}

export default NotificationList
