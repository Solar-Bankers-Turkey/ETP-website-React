import React from 'react'

interface Props {
  children?: React.ReactNode
  className?: string
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
const DropdownListItem = ({ onClick, className, children }: Props) => {
  return (
    <div
      className={className}
      onClick={e => {
        e.stopPropagation()
        if (onClick) {
          onClick(e)
        }
      }}
    >
      {children}
    </div>
  )
}

export default DropdownListItem
