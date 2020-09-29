import React from 'react'
import { DatumValue, Point, ResponsiveLine } from '@nivo/line'

interface Props {
  enableArea?: boolean
  customSlice?: 'negative' | 'default'
  enableSlice?: 'x' | 'y' | false
  enablePointLabel?: boolean
  colors?: string[]
  dataSeries: any
  margin?: { top: number; right: number; bottom: number; left: number }
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
  enableSlice = 'x',
  enablePointLabel = false,
  lineCurve = 'linear',
  showLegend = true,
  dataSeries,
  colors,
  margin,
  customSlice,
  enableArea = false,
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
      enableArea={enableArea}
      enablePointLabel={enablePointLabel}
      curve={lineCurve}
      pointSize={4}
      enableSlices={enableSlice}
      sliceTooltip={({ slice }) => {
        return sliceSelector(customSlice, slice)
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
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickRotation: 0,
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
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
      colors={d => d.color}
      lineWidth={2}
      crosshairType="cross"
      pointColor={{ from: 'color', modifiers: [] }}
      pointBorderWidth={5}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabel="y"
      pointLabelYOffset={-12}
      areaOpacity={0.15}
      useMesh={true}
      legends={legendProps}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
    />
  )
})

export default CustomLineChart

function sliceSelector(type: 'negative' | 'default', slice: any) {
  switch (type) {
    case 'default':
      return <Slice_Default slice={slice} />
    case 'negative':
      return <Slice_Default slice={slice} />
    default:
      return <Slice_Default slice={slice} />
  }
}

function Slice_Default({ slice }) {
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
}

function Slice_LineChartWithNegativeValues({ slice }) {
  const CalculatePointValues = () => {
    let feed = 0
    let usage = 0
    if (typeof usage === 'undefined') {
    }
    // console.log({ feed: slice?.points[0]?.data.y, usage: slice?.points[1]?.data.y })
    console.log(slice)
    return (
      <>
        <div
          style={{
            color: 'rgb(97, 205, 187)',
            padding: '3px 0',
          }}
        >
          <strong>Feed</strong> [{slice?.points[0]?.data.y}]
        </div>
        <div
          style={{
            color: 'rgb(244, 117, 96)',
            padding: '3px 0',
          }}
        >
          <strong>Feed</strong> [{slice?.points[1]?.data.y}]
        </div>
      </>
    )
  }

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

      <CalculatePointValues />
    </div>
  )
}
