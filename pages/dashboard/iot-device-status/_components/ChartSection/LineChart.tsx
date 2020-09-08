import React, { useState, useEffect } from 'react'
import { ResponsiveLine } from '@nivo/line'
import data1 from './moctData_1.json'
import data2 from './moctData_2.json'
import data3 from './moctData_3.json'
import data4 from './moctData_4.json'

interface Props {
  dataRange: string
}
const dataSeries = {
  day: data1,
  week: data2,
  month: data3,
  year: data4,
}
const LineChart = React.memo(function LineChart({ dataRange }: Props) {
  const [data, setData] = useState(dataSeries[dataRange])
  useEffect(() => {
    setData(dataSeries[dataRange])
  }, [dataRange])
  return (
    <ResponsiveLine
      theme={{
        axis: {
          ticks: {
            line: {
              stroke: 'var(--bg-border-color-soft)',
            },
            text: {
              fill: 'var(--text-color-secondary-dark)',
            },
          },
        },
        grid: {
          line: {
            stroke: 'var(--bg-border-color-soft)',
          },
        },
      }}
      data={data}
      margin={{ top: 10, right: 30, bottom: 50, left: 50 }}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'transportation',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 10,
        tickRotation: 0,
        legendOffset: -50,
        legendPosition: 'middle',
      }}
      colors={['#0cb680', '#e19c52', '#784097', '#d24342']}
      lineWidth={2}
      pointSize={2}
      pointColor={{ from: 'color', modifiers: [] }}
      pointBorderWidth={5}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabel="y"
      pointLabelYOffset={-12}
      areaBaselineValue={60}
      areaOpacity={0.15}
      useMesh={true}
      legends={[
        {
          itemTextColor: 'var(--text-color-secondary-light)',
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateY: 48,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  )
})

export default LineChart
