import React, { useState, useEffect } from 'react'
import { ResponsiveLine } from '@nivo/line'

interface Props {
  colors: string[]
  dataSeries: any
  margin: { top: number; right: number; bottom: number; left: number }
  showLegend?: boolean
  lineCurve?:
    | 'basis'
    | 'cardinal'
    | 'catmullRom'
    | 'linear'
    | 'monotoneX'
    | 'monotoneY'
    | 'natural'
    | 'step'
    | 'stepAfter'
    | 'stepBefore'
}

const CustomLineChart = React.memo(function CustomLineChart({
  lineCurve = 'linear',
  showLegend = true,
  dataSeries,
  colors,
  margin,
}: Props) {
  const legendProps: any = showLegend
    ? [
        {
          padding: -8,
          symbolSpacing: 2,
          itemTextColor: 'var(--text-color-secondary-light)',
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateY: 48,
          itemsSpacing: 0,
          itemDirection: 'top-to-bottom',
          itemWidth: 100,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
        },
      ]
    : []

  return (
    <ResponsiveLine
      curve={lineCurve}
      enableSlices="x"
      sliceTooltip={({ slice }) => {
        return (
          <div
            style={{
              background: 'var(--bg-color-primary-dark)',
              padding: '9px 12px',
              border: '1px solid var(--border-color-invert-soft)',
              borderRadius: '4px',
            }}
          >
            <div style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-color-invert-soft)' }}>
              {slice.points[0].data.x}
            </div>
            <div style={{ marginBottom: '0.5rem' }}></div>
            {slice.points.map(point => (
              <div
                key={point.id}
                style={{
                  color: point.serieColor,
                  padding: '3px 0',
                }}
              >
                <strong>{point.serieId}</strong> [{point.data.yFormatted}]
              </div>
            ))}
          </div>
        )
      }}
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
      data={dataSeries}
      margin={margin}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
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
      colors={colors}
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
      legends={legendProps}
    />
  )
})

export default CustomLineChart
