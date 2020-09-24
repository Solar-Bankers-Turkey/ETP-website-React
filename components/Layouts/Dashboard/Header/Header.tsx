import React, { useState } from 'react'

import styles from './Header.module.css'
import BarsIcon from '../../../Icons/BarsIcon'
import MailIcon from '../../../Icons/MailIcon'
import BellIcon from '../../../Icons/BellIcon'
import IconButton from '../../../Button/IconButton'

import { useLocalizationContext } from '../../../../context/LocalizationContext/LocalizationContext'
import HeaderInfo from './HeaderInfo'
import HeaderInfoFloating from './HeaderInfoFloating'
import Dropdown from '../../../Dropdown/Dropdown'
import DropdownButton from '../../../Dropdown/DropdownButton'
import DropdownMenu from '../../../Dropdown/DropdownMenu'
import DropdownItem from '../../../Dropdown/DropdownItem'

interface Props {
  sidebarToggleHandler: () => void
}
const Header = ({ sidebarToggleHandler }) => {
  const { t } = useLocalizationContext()

  return (
    <header className={styles.container}>
      <div className={styles.sidebar_toggle} onClick={sidebarToggleHandler}>
        <BarsIcon />
      </div>

      <HeaderInfo />
      <div className={styles.header_info_floating}>
        <HeaderInfoFloating />
      </div>

      <div className={styles.btn_group}>
        <Dropdown>
          <DropdownButton>
            <IconButton id="mail" badgeColor="var(--blue)" badgeText={5} badge={true} icon={<MailIcon />}></IconButton>
          </DropdownButton>
          <DropdownMenu>
            <DropdownItem>Mail 1</DropdownItem>
            <DropdownItem>Mail 2</DropdownItem>
            <DropdownItem>Mail 3</DropdownItem>
            <DropdownItem>Mail 4</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownButton>
            <IconButton
              id="notifications"
              badgeColor="var(--red)"
              badgeText={11}
              badge={true}
              icon={<BellIcon />}
            ></IconButton>
          </DropdownButton>
          <DropdownMenu offsetRight={-20}>
            <DropdownItem>Notification 1</DropdownItem>
            <DropdownItem>Notification 2</DropdownItem>
            <DropdownItem>Notification 3</DropdownItem>
            <DropdownItem>Notification 4</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <DropdownButton>
            <div className={styles.btn_username}>{t.common.hello},&nbsp;Username</div>
          </DropdownButton>
          <DropdownMenu>
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Log Out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </header>
  )
}

export default Header
