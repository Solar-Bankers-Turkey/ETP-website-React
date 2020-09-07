import React from 'react'
import { mockData } from './mockData'
import styles from './Table.module.css'
const Table = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.header_item}>Seller</div>
          <div className={styles.header_item}>Location</div>
          <div className={styles.header_item}>Supply</div>
          <div className={styles.header_item}>Price</div>
          <div className={styles.header_item}>Date</div>
        </header>

        {mockData.map((e: any, i: number) => {
          return (
            <div key={i} className={styles.row}>
              <div className={styles.row_item}>{e.seller}</div>
              <div className={styles.row_item}>{e.location}</div>
              <div className={styles.row_item}>{e.supply}</div>
              <div className={styles.row_item}>{e.price}</div>
              <div className={styles.row_item}>{e.date}</div>
              <div className={styles.row_item}>
                <button className={styles.btn_buy}>
                  <span>BUY</span>
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Table
