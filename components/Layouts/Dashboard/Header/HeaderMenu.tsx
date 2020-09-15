import React from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

interface Props {
  menuName: string | null
  handleClose: () => void
  anchorEl: HTMLElement
}

const HeaderMenu = ({ menuName, handleClose, anchorEl }: Props) => {
  if (!anchorEl) {
    return null
  }

  const MenuSwitcher = () => {
    switch (menuName) {
      case 'mail':
        return (
          <Menu
            className="menu"
            id="mail"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        )

      case 'notifications':
        return (
          <Menu
            className="menu"
            id="notifications"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Notification-1</MenuItem>
            <MenuItem onClick={handleClose}>Notification-2</MenuItem>
            <MenuItem onClick={handleClose}>Notification-3</MenuItem>
          </Menu>
        )

      default:
        return null
    }
  }

  return <MenuSwitcher />
}

export default HeaderMenu
