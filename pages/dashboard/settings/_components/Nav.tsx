import React from 'react'
import cx from 'classnames'
import styles from './Nav.module.css'
import ProfileIcon from '../../../../components/Icons/ProfileIcon'
import CreditCardIcon from '../../../../components/Icons/CreditCardIcon'
import LockIcon from '../../../../components/Icons/LockIcon'
import BellIcon from '../../../../components/Icons/BellIcon'
import DeviceIcon from '../../../../components/Icons/DeviceIcon'
import RightArrowIcon from '../../../../components/Icons/RightArrowIcon'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Nav = () => {
  const router = useRouter()

  return (
    <nav className={styles.nav_container}>
      <ul className={styles.nav_list}>
        <Link href="/dashboard/settings/profile">
          <li
            className={cx(
              styles.nav_list_item,
              router.pathname === '/dashboard/settings/profile' ? styles.selected : '',
            )}
          >
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
          <li
            className={cx(
              styles.nav_list_item,
              router.pathname === '/dashboard/settings/login-security' ? styles.selected : '',
            )}
          >
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
          <li
            className={cx(
              styles.nav_list_item,
              router.pathname === '/dashboard/settings/payment' ? styles.selected : '',
            )}
          >
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
          <li
            className={cx(
              styles.nav_list_item,
              router.pathname === '/dashboard/settings/notifications' ? styles.selected : '',
            )}
          >
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
          <li
            className={cx(
              styles.nav_list_item,
              router.pathname === '/dashboard/settings/device' ? styles.selected : '',
            )}
          >
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
