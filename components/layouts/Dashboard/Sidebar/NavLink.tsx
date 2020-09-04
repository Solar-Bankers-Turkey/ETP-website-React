import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cx from 'classnames'

import styles from './Sidebar.module.css'

interface Props {
  url: string
  text: string
  icon: JSX.Element
}
const NavLink = ({ url, text, icon }: Props) => {
  const router = useRouter()

  return (
    <li className={cx(styles.nav_list_item, router.pathname === url ? styles.selected : null)}>
      <Link href={url}>
        <a>
          <div className={styles.nav_list_item_icon}>{icon}</div>
          <div className={styles.nav_list_item_text}>{text}</div>
        </a>
      </Link>
    </li>
  )
}

export default NavLink
