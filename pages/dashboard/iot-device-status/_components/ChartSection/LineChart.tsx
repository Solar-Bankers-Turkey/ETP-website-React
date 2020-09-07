import React, { useState, useRef, useEffect } from 'react'
import dynamic from 'next/dynamic'
import data from './moctData_1.json'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const LineChart = React.memo(function LineChart() {
  const series = useRef(data.series)
  const options = useRef(data.options)

  return <Chart options={options.current} series={series.current} type="line" width="95%" height="500px" />
})

export default LineChart
