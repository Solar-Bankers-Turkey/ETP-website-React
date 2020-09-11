import React from 'react'
import styles from './Nav.module.css'

import ProfileIcon from '../../../../components/Icons/ProfileIcon'
import CreditCardIcon from '../../../../components/Icons/CreditCardIcon'
import LockIcon from '../../../../components/Icons/LockIcon'
import BellIcon from '../../../../components/Icons/BellIcon'
import DeviceIcon from '../../../../components/Icons/DeviceIcon'
import RightArrowIcon from '../../../../components/Icons/RightArrowIcon'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className={styles.nav_container}>
      <ul className={styles.nav_list}>
        <Link href="/dashboard/settings/profile">
          <li className={styles.nav_list_item}>
            <a>
              <div className={styles.nav_list_item_icon}>
                <ProfileIcon />
              </div>
              <div className={styles.nav_list_item_text}>profile</div>
              <div className={styles.right_arrow}>
                <RightArrowIcon />
              </div>
            </a>
          </li>
        </Link>

        <Link href="/dashboard/settings/login-security">
          <li className={styles.nav_list_item}>
            <a>
              <div className={styles.nav_list_item_icon}>
                <LockIcon />
              </div>
              <div className={styles.nav_list_item_text}>login & security</div>
              <div className={styles.right_arrow}>
                <RightArrowIcon />
              </div>
            </a>
          </li>
        </Link>

        <Link href="/dashboard/settings/payment">
          <li className={styles.nav_list_item}>
            <a>
              <div className={styles.nav_list_item_icon}>
                <CreditCardIcon />
              </div>
              <div className={styles.nav_list_item_text}>payment</div>
              <div className={styles.right_arrow}>
                <RightArrowIcon />
              </div>
            </a>
          </li>
        </Link>
        <Link href="/dashboard/settings/notifications">
          <li className={styles.nav_list_item}>
            <a>
              <div className={styles.nav_list_item_icon}>
                <BellIcon />
              </div>
              <div className={styles.nav_list_item_text}>notifications</div>
              <div className={styles.right_arrow}>
                <RightArrowIcon />
              </div>
            </a>
          </li>
        </Link>

        <Link href="/dashboard/settings/device">
          <li className={styles.nav_list_item}>
            <a>
              <div className={styles.nav_list_item_icon}>
                <DeviceIcon />
              </div>
              <div className={styles.nav_list_item_text}>device</div>
              <div className={styles.right_arrow}>
                <RightArrowIcon />
              </div>
            </a>
          </li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav
