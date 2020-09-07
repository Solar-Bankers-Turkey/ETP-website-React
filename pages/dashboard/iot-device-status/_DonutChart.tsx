import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import styles from './IotDeviceStatus.module.css'

interface Props {
  valuePercentage: number
  valueText: string
  name: string
  color: string
}

const DonutChart = ({ valuePercentage, valueText, name, color }: Props) => {
  return (
    <>
      <div className={styles.donut_container}>
        <div className={styles.donut}>
          <PieChart
            radius={PieChart.defaultProps.radius - 8}
            data={[{ value: valuePercentage, color: color }]}
            background="#3e4e6c"
            totalValue={100}
            startAngle={-90}
            lineWidth={32}
            rounded
            label={({ dataEntry }) => Math.round(dataEntry.value) + '%'}
            labelStyle={{
              fontSize: '16px',
              fill: 'white',
            }}
            labelPosition={0}
          />
        </div>
        <div className={styles.donut_legend}>
          <div className={styles.legend_title}>{name}</div>
          <div className={styles.legend_value}>{valueText}kWh</div>
        </div>
      </div>
    </>
  )
}

export default DonutChart
