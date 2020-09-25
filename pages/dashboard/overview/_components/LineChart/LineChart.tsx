import React, { useRef } from 'react'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
import mockData from './mockData.json'

const LineChart = React.memo(function LineChart() {
  return <Chart options={mockOptions} series={mockData} width="100%" height="430px" />
})

export default LineChart

const mockOptions = {
  chart: {
    type: 'bar',

    stacked: false,
    zoom: {
      enabled: true,
    },
    toolbar: {
      show: false,
    },
    foreColor: 'var(--text-color-secondary-dark)',
  },
  plotOptions: {
    bar: {
      colors: {
        ranges: [
          {
            from: -1000000,
            to: -1,
            color: 'var(--red)',
          },
          {
            from: 0,
            to: 1000000,
            color: 'var(--green)',
          },
        ],
      },
      columnWidth: '100%',
    },
  },
  stroke: { curve: 'smooth', width: 0 },
  tooltip: {
    theme: 'dark',
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    borderColor: '#20293c',
  },
  yaxis: {
    show: false,
  },
  xaxis: {
    type: 'datetime',
  },
}
