import React, { useState, useLayoutEffect } from 'react'
import { ResponsiveBar, BarItemProps } from '@nivo/bar'

interface Props {
  dataSeries: any
  colors: string[]
  keys: string[]
  overrideGroupMode?: 'grouped' | 'stacked' | null
}

const CustomBarItem = ({ x, y, width, height, color, label, theme, labelColor }) => {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect width={width > 32 ? 32 : width} height={height} rx={2} ry={2} fill={color}></rect>
      <text
        x={width > 32 ? 16 : width / 2}
        y={height / 2}
        textAnchor="middle"
        dominantBaseline="central"
        style={{
          ...theme.labels.text,
          pointerEvents: 'none',
          fill: labelColor,
        }}
      >
        {label}
      </text>
    </g>
  )
}

const CustomBarChart = React.memo(function CustomBarChart({
  overrideGroupMode = null,
  dataSeries,
  colors,
  keys,
}: Props) {
  const [groupMode, setGroupMode] = useState<'grouped' | 'stacked'>('grouped')

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
    <ResponsiveBar
      barComponent={CustomBarItem}
      data={dataSeries}
      keys={keys}
      indexBy="day"
      margin={{ top: 40, right: 0, bottom: 50, left: 30 }}
      padding={0.5}
      innerPadding={4}
      groupMode={overrideGroupMode ? overrideGroupMode : groupMode}
      colors={colors}
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
        tickPadding: 5,
        tickRotation: 0,
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
          translateX: 0,
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
  )
})

export default CustomBarChart
