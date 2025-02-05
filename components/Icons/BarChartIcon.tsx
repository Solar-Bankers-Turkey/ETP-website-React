import React from 'react'

interface Props {
  color?: string
}
const BarChartIcon = ({ color = 'currentColor' }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill={color}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z" />
    </svg>
  )
}

export default BarChartIcon
