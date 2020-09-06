import React, { useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import styles from './DonutChart.module.css'
const dataMock = [
  { title: 'T', value: 62, color: '#1f8efa' },
  { title: 'S', value: 22, color: '#05c985' },
  { title: 'R', value: 16, color: '#ffab4f' },
]

const DonutChart = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.chart_header}>Energy Usage</h1>
      <div className={styles.chart}>
        <PieChart
          radius={PieChart.defaultProps.radius - 6}
          segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
          animate
          style={{
            fontFamily: 'Inter',
            fontSize: '8px',
          }}
          lineWidth={24}
          label={({ dataEntry }) => dataEntry.value + '%'}
          labelStyle={index => ({
            fill: dataMock[index].color,
            fontSize: '5px',
            fontFamily: 'sans-serif',
          })}
          labelPosition={64}
          data={dataMock}
        />
        <h6 className={styles.total}>
          <span>8</span>kWh
        </h6>
      </div>
      <div className={styles.legend}>
        {dataMock.map((e: any) => {
          return (
            <div key={e.title} className={styles.legend_item}>
              <div style={{ background: e.color }} className={styles.legend_marker}></div>
              <div className={styles.legend_name}>{e.title}</div>
              <div className={styles.legend_value}>{e.value}%</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DonutChart
