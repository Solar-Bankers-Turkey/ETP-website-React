import React from 'react'
import styles from './Table.module.css'

interface Props {
  action?: () => void
  rowData: string[][]
  headData: string[]
  actionName?: string
}

const Table = ({ rowData, headData, action, actionName }: Props) => {
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

        {rowData.map((k: any, i: any) => {
          return (
            <div className={styles.row} key={i}>
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
                    <span>{actionName}</span>
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
