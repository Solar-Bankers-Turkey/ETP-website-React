import React from 'react'
import styles from '../Overview.module.css'
import { ResponsiveBar } from '@nivo/bar'

const data = [
  {
    day: 'Mon',
    min: 21,
    max: 12,
  },
  {
    day: 'Tue',
    min: 21,
    max: 11,
  },
  {
    day: 'Wed',
    min: 21,
    max: 10,
  },
  {
    day: 'Thu',
    min: 21,
    max: 9,
  },
  {
    day: 'Fri',
    min: 21,
    max: 6,
  },

  {
    day: 'Sat',
    min: 21,
    max: 9,
  },
  {
    day: 'Sun',
    min: 17,
    max: 8,
  },
]

const BarChart = () => {
  return (
    <div className={styles.bar_chart}>
      <ResponsiveBar
        enableLabel={false}
        data={data}
        keys={['min', 'max']}
        minValue={16}
        maxValue={36}
        indexBy="day"
        margin={{ top: 40, right: 0, bottom: 50, left: 40 }}
        padding={0.85}
        borderRadius={5}
        groupMode={'stacked'}
        colors={['transparent', 'var(--primary-color)']}
        enableGridX={false}
        gridYValues={[16, 36]}
        theme={{
          tooltip: {
            container: {
              background: 'var(--bg-color-primary-darker)',
            },
          },
          axis: {
            ticks: {
              line: {
                stroke: 'var(--border-color-soft)',
              },
              text: {
                fill: 'var(--text-color-secondary-dark)',
              },
            },
          },
          grid: {
            line: {
              stroke: 'var(--border-color-soft)',
            },
          },
        }}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickPadding: 10,
          tickRotation: 0,
          legendPosition: 'middle',
          legendOffset: 40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 10]] }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        tooltip={({ id, value, color, data }) => {
          return (
            <strong style={{ color }}>
              {data.day}: {data.min + '℃'} - {parseFloat(data.min as string) + parseFloat(data.max as string) + '℃'}
            </strong>
          )
        }}
      />
    </div>
  )
}

export default BarChart
