import React from 'react'
import styles from './Table.module.css'

interface Props {
  action?: boolean
  rowData: string[][]
  headData: string[]
}

const Table = ({ rowData, headData, action }: Props) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          {headData.map(e => (
            <div className={styles.header_item} key={e}>
              {e}
            </div>
          ))}
        </header>

        {rowData.map((k: any) => {
          return (
            <div className={styles.row}>
              {k.map((e: any, i: number) => {
                return (
                  <div className={styles.row_item} key={i}>
                    {e}
                  </div>
                )
              })}
              {action && (
                <div className={styles.row_item}>
                  <button className={styles.btn_buy}>
                    <span>BUY</span>
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Table
