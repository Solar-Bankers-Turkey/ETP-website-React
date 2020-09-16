import React from 'react'
import styles from './Info.module.css'
import MoneyIcon from '../../../../../components/Icons/MoneyIcon'
import IndustryIcon from '../../../../../components/Icons/IndustryIcon'
import WarningIcon from '../../../../../components/Icons/WarningIcon'
import InfoIcon from '../../../../../components/Icons/InfoIcon'
import SettingsIconSolid from '../../../../../components/Icons/SettingsIconSolid'
import { useLocalizationContext } from '../../../../../context/LocalizationContext/LocalizationContext'
const Info = () => {
  const { t } = useLocalizationContext()
  return (
    <div className={styles.info}>
      <div className={styles.info_group}>
        <div className={styles.info_card}>
          <h1>{t.common.income}</h1>
          <div className={styles.icon_with_text}>
            <div className={styles.icon}>
              <MoneyIcon />
            </div>
            <div className={styles.text}>
              <h2>{t.common.total}</h2>
              <h3>3.500 ₺</h3>
            </div>
          </div>
        </div>
        <div className={styles.info_card}>
          <h1>
            {t.common.total} CO<sub>2</sub> {t.common.savings}
          </h1>
          <div className={styles.icon_with_text}>
            <div style={{ marginBottom: '5px' }} className={styles.icon}>
              <IndustryIcon />
            </div>
            <div className={styles.text}>
              <h2>{t.common.total}</h2>
              <h3>29.99 G</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.notification_container}>
        <h1>{t.common.last_notifications}</h1>
        <ul className={styles.notification_list}>
          <li className={styles.notification_list_item}>
            <div className={styles.notification_list_item_icon}>
              <WarningIcon color="var(--orange)" />
            </div>
            <p className={styles.notification_list_item_text}>T Phase in overuse.</p>
          </li>
          <li className={styles.notification_list_item}>
            <div className={styles.notification_list_item_icon}>
              <SettingsIconSolid color="var(--green)" />
            </div>
            <p className={styles.notification_list_item_text}>
              Daily System Backup Process Is Completed And Uploaded To The Server.
            </p>
          </li>
          <li className={styles.notification_list_item}>
            <div className={styles.notification_list_item_icon}>
              <SettingsIconSolid color="var(--green)" />
            </div>
            <p className={styles.notification_list_item_text}>Payment Option Changed.</p>
          </li>
          <li className={styles.notification_list_item}>
            <div className={styles.notification_list_item_icon}>
              <InfoIcon color="var(--blue)" />
            </div>
            <p className={styles.notification_list_item_text}>System Update: 2.1.3 Software Version Available.</p>
          </li>
          <li className={styles.notification_list_item}>
            <div className={styles.notification_list_item_icon}>
              <InfoIcon color="var(--blue)" />
            </div>
            <p className={styles.notification_list_item_text}>System Update: 2.1.3 Software Version Available.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Info
