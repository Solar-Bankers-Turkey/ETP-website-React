import React from 'react'
import compose from 'recompose/compose'
import withPropsOnChange from 'recompose/withPropsOnChange'
import pure from 'recompose/pure'
import { BasicTooltip } from '@nivo/tooltip'

const CustomBarItem = ({
  data,

  x,
  y,
  width,
  height,
  color,
  borderWidth,
  borderColor,

  label,
  shouldRenderLabel,
  labelColor,

  showTooltip,
  hideTooltip,
  onMouseEnter,
  onMouseLeave,
  tooltip,

  theme,
}) => {
  const handleTooltip = e => showTooltip(tooltip, e)
  const handleMouseEnter = e => {
    onMouseEnter(data, e)
    showTooltip(tooltip, e)
  }
  const handleMouseLeave = e => {
    onMouseLeave(data, e)
    hideTooltip(e)
  }
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        width={width > 32 ? 32 : width}
        height={height}
        rx={2}
        ry={2}
        fill={data.fill ? data.fill : color}
        strokeWidth={borderWidth}
        stroke={borderColor}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleTooltip}
        onMouseLeave={handleMouseLeave}
      />
      {shouldRenderLabel && (
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
      )}
    </g>
  )
}

const enhance = compose(
  withPropsOnChange(['data', 'color', 'onClick'], ({ data, color, onClick }) => ({
    onClick: event => onClick({ color, ...data }, event),
  })),
  withPropsOnChange(
    ['data', 'color', 'theme', 'tooltip', 'getTooltipLabel', 'tooltipFormat'],
    ({ data, color, theme, tooltip, getTooltipLabel, tooltipFormat }) => ({
      tooltip: (
        <BasicTooltip
          id={getTooltipLabel(data)}
          value={data.value}
          enableChip={true}
          color={color}
          format={tooltipFormat}
          renderContent={typeof tooltip === 'function' ? tooltip.bind(null, { color, theme, ...data }) : null}
        />
      ),
    }),
  ),
  pure,
)

export default enhance(CustomBarItem)
