import React, { useState, useRef } from 'react'
import dynamic from 'next/dynamic'
import data from './moctData_1.json'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const LineChart = () => {
  const series = useRef(data.series)
  const options = useRef(data.options)
  return <Chart options={options.current} series={series.current} type="line" width="100%" height="100%" />
}

export default LineChart
