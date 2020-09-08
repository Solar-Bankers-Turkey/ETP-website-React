import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import data from './moctData_1.json'

const LineChart = () => {
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
}

export default LineChart
