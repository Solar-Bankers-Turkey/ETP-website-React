import React, { useRef } from 'react'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
import mockData from './mockData.json'

import styles from '../Overview.module.css'

const LineChart = React.memo(function LineChart() {
  return <Chart options={mockOptions} series={mockData} width="100%" height="430px" />
})

export default LineChart

const mockOptions = {
  plotOptions: {
    bar: {
      colors: {
        ranges: [
          {
            from: -100,
            to: 0,
            color: '#ff4b5c',
          },
          {
            from: 0,
            to: 100,
            color: '#05c985',
          },
        ],
      },
      columnWidth: '20%',
    },
  },
  colors: ['#05c985', '#ff4b5c', 'var(--primary-color)'],
  chart: {
    type: 'line',
    stacked: true,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    foreColor: 'var(--text-color-secondary-dark)',
  },

  tooltip: {
    theme: 'dark',
  },
  stroke: {
    curve: 'smooth',
    color: '#000000',
    width: [0, 0, 4],
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [2],
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    borderColor: '#20293c',
  },
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisBorder: {
      show: true,
      color: '#20293c',
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: true,
      width: 1,
      position: 'back',
      opacity: 0.9,
      stroke: {
        color: 'var(--primary-color)',
        width: 1.5,
        dashArray: 0,
      },
    },
  },
}
