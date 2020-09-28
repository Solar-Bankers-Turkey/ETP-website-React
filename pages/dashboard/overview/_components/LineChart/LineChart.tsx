import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import mockData from './mockData.json'

const gradientOffset = () => {
  const dataMax = Math.max(...mockData.map(i => i.value))
  const dataMin = Math.min(...mockData.map(i => i.value))

  if (dataMax <= 0) {
    return 0
  } else if (dataMin >= 0) {
    return 1
  } else {
    return dataMax / (dataMax - dataMin)
  }
}
const off = gradientOffset()
const LineChart = React.memo(function LineChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={mockData} margin={{ top: 10, right: 30, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#848c9c8f" />
        <XAxis
          tick={{ fill: 'var(--text-color-secondary-dark)' }}
          dataKey="name"
          ticks={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
        />
        <YAxis tick={{ fill: 'var(--text-color-secondary-dark)' }} />
        <Tooltip content={(props: any) => <CustomTooltip active={props.active} payload={props.payload} />} />
        <defs>
          <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset={off} stopColor="var(--green)" stopOpacity={1} />
            <stop offset={off} stopColor="var(--red)" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area type="monotoneY" dataKey="value" stroke="transparent" fill="url(#splitColor)" />
      </AreaChart>
    </ResponsiveContainer>
  )
})

export default LineChart

function CustomTooltip({ active, payload }) {
  if (!payload) return null
  if (active) {
    const data = payload[0].payload
    return (
      <div className="custom-tooltip">
        <p>{`${data.name}`}</p>
        <p>{`Hour : ${data.hour}:00`}</p>
        <p>
          {data.value === 0 ? (
            <div>
              <p className="green">Feed{' : ' + data.value}</p>
              <p className="red">Usage{' : ' + data.value}</p>
            </div>
          ) : data.value > 0 ? (
            <span>
              <span className="green">Feed</span> : {data.value}
            </span>
          ) : (
            <span>
              <span className="red">Usage</span> : {data.value}
            </span>
          )}
        </p>
        <style jsx>{`
          .custom-tooltip {
            background: var(--bg-color-primary-darker);
            padding: 0.5rem 1rem;
            border-radius: 4px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
          }
          p {
            margin: 0.5rem 0;
          }
          .red {
            color: var(--red);
          }
          .green {
            color: var(--green);
          }
        `}</style>
      </div>
    )
  }

  return null
}
