import React, { useState, useLayoutEffect } from 'react'
import { ResponsiveBar } from '@nivo/bar'
import styles from './BarChartSection.module.css'
import data from './mockData.json'
import CustomBarItem from './CustomBarItem'

const BarChart = React.memo(function BarChart() {
  const [groupMode, setGroupMode] = useState<'grouped' | 'stacked'>(window.innerWidth > 800 ? 'grouped' : 'stacked')

  useLayoutEffect(() => {
    function setChart() {
      if (window.innerWidth > 900) {
        setGroupMode('grouped')
      } else {
        setGroupMode('stacked')
      }
    }
    window.addEventListener('resize', setChart)
    return () => window.removeEventListener('resize', setChart)
  }, [])

  return (
    <div className={styles.container}>
      <ResponsiveBar
        barComponent={CustomBarItem}
        data={data}
        keys={['Net Profit', 'Revenue', 'Free Cash Flow']}
        indexBy="day"
        margin={{ top: 40, right: 0, bottom: 50, left: 30 }}
        padding={0.25}
        innerPadding={6}
        groupMode={groupMode}
        colors={['rgb(31, 142, 250)', 'rgb(255, 255, 255)', 'rgb(5, 201, 133)']}
        tooltip={({ id, value, color }) => (
          <strong style={{ color }}>
            {id}: {value}
          </strong>
        )}
        theme={{
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
          tooltip: {
            container: {
              border: '2px solid var(--bg-color-secondary-light)',
              borderRadius: '4px',
              background: 'var(--bg-color-primary-darker)',
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
          legend: 'country',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'food',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 10]] }}
        legends={[
          {
            itemTextColor: 'var(--text-color-secondary-light)',
            dataFrom: 'keys',
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 20,
            translateY: 50,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 16,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  )
})

export default BarChart
