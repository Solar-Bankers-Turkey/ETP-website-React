import React, { useState } from 'react'

import styles from './Header.module.css'
import BarsIcon from '../../../Icons/BarsIcon'
import MailIcon from '../../../Icons/MailIcon'
import BellIcon from '../../../Icons/BellIcon'
import IconButton from '../../../Button/IconButton'
import HeaderMenu from './HeaderMenu'
import { useLocalizationContext } from '../../../../context/LocalizationContext/LocalizationContext'
import HeaderInfo from './HeaderInfo'
import HeaderInfoFloating from './HeaderInfoFloating'

interface Props {
  sidebarToggleHandler: () => void
}
const Header = ({ sidebarToggleHandler }) => {
  const { t } = useLocalizationContext()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

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
        <IconButton
          id="mail"
          onClick={handleClick}
          badgeColor="var(--blue)"
          badgeText={5}
          badge={true}
          icon={<MailIcon />}
        ></IconButton>

        <IconButton
          id="notifications"
          onClick={handleClick}
          badgeColor="var(--red)"
          badgeText={11}
          badge={true}
          icon={<BellIcon />}
        ></IconButton>

        <div className={styles.btn_username}>{t.common.hello},&nbsp;Username</div>
      </div>
      <HeaderMenu anchorEl={anchorEl} menuName={anchorEl?.id} handleClose={handleClose} />
    </header>
  )
}

export default Header
