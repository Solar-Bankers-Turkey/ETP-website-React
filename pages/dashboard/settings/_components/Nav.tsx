import React from 'react'
import styles from './Nav.module.css'

import ProfileIcon from '../../../../components/Icons/ProfileIcon'
import CreditCardIcon from '../../../../components/Icons/CreditCardIcon'
import LockIcon from '../../../../components/Icons/LockIcon'
import BellIcon from '../../../../components/Icons/BellIcon'
import DeviceIcon from '../../../../components/Icons/DeviceIcon'
import RightArrowIcon from '../../../../components/Icons/RightArrowIcon'
const Nav = () => {
  return (
    <nav className={styles.nav_container}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_list_item}>
          <div className={styles.nav_list_item_icon}>
            <ProfileIcon />
          </div>
          <div className={styles.nav_list_item_text}>profile</div>
          <div className={styles.right_arrow}>
            <RightArrowIcon />
          </div>
        </li>

        <li className={styles.nav_list_item}>
          <div className={styles.nav_list_item_icon}>
            <LockIcon />
          </div>
          <div className={styles.nav_list_item_text}>login & security</div>
          <div className={styles.right_arrow}>
            <RightArrowIcon />
          </div>
        </li>

        <li className={styles.nav_list_item}>
          <div className={styles.nav_list_item_icon}>
            <CreditCardIcon />
          </div>
          <div className={styles.nav_list_item_text}>payment</div>
          <div className={styles.right_arrow}>
            <RightArrowIcon />
          </div>
        </li>

        <li className={styles.nav_list_item}>
          <div className={styles.nav_list_item_icon}>
            <BellIcon />
          </div>
          <div className={styles.nav_list_item_text}>notifications</div>
          <div className={styles.right_arrow}>
            <RightArrowIcon />
          </div>
        </li>
        <li className={styles.nav_list_item}>
          <div className={styles.nav_list_item_icon}>
            <DeviceIcon />
          </div>
          <div className={styles.nav_list_item_text}>device</div>
          <div className={styles.right_arrow}>
            <RightArrowIcon />
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
