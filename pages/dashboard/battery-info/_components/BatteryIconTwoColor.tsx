import React from 'react'

interface Props {
  percentage?: string
}
const BatteryIcon = ({ percentage }: Props) => {
  return (
    <svg fill="url('#myGradient')" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M0 18h21v-12h-21v12zm9.599-6.157v-2.843l6.401 4.686-4.408-1.296v2.61l-6.592-4.488 4.599 1.331zm14.401-1.593v3.5c0 .69-.56 1.25-1.25 1.25h-.75v-6h.75c.69 0 1.25.56 1.25 1.25z" />
      <defs>
        <linearGradient id="myGradient">
          <stop offset={percentage} stopColor="var(--green)" />
          <stop offset={percentage} stopColor="var(--primary-color)" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default BatteryIcon
