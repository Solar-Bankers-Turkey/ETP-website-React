import React from 'react'

import styles from './Payment.module.css'
import ThreeDot from '../../../../../components/Icons/ThreeDot'
import Button from '../../../../../components/Button/Button'

const Payment = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Payment Methods</h1>
        <Button variant="primary-contained">Add Method</Button>
      </div>
      <div className={styles.payment_list_container}>
        <ul className={styles.payment_list}>
          <li className={styles.payment_list_item}>
            <div className={styles.logo}>
              <img src="/logo/visa.webp"></img>
            </div>
            <div className={styles.text_container}>
              <p className={styles.text_1}>Card ending in 0003</p>
              <p className={styles.text_2}>Expires 03/2020</p>
            </div>
            <div className={styles.btn_group}>
              <span className={styles.default_badge}>Default</span>
              <div className={styles.dropdown}>
                <ThreeDot />
              </div>
            </div>
          </li>
          <li className={styles.payment_list_item}>
            <div className={styles.logo}>
              <img src="/logo/maestro.webp"></img>
            </div>
            <div className={styles.text_container}>
              <p className={styles.text_1}>Card ending in 0003</p>
              <p className={styles.text_2}>Expires 03/2020</p>
            </div>
            <div className={styles.btn_group}>
              <div className={styles.dropdown}>
                <ThreeDot />
              </div>
            </div>
          </li>
          <li className={styles.payment_list_item}>
            <div className={styles.logo}>
              <img src="/logo/mastercard.webp"></img>
            </div>
            <div className={styles.text_container}>
              <p className={styles.text_1}>Card ending in 0003</p>
              <p className={styles.text_2}>Expires 03/2020</p>
            </div>
            <div className={styles.btn_group}>
              <div className={styles.dropdown}>
                <ThreeDot />
              </div>
            </div>
          </li>
          <li className={styles.payment_list_item}>
            <div className={styles.logo}>
              <img src="/logo/visa.webp"></img>
            </div>
            <div className={styles.text_container}>
              <p className={styles.text_1}>Card ending in 0003</p>
              <p className={styles.text_2}>Expires 03/2020</p>
            </div>
            <div className={styles.btn_group}>
              <div className={styles.dropdown}>
                <ThreeDot />
              </div>
            </div>
          </li>
          <li className={styles.payment_list_item}>
            <div className={styles.logo}>
              <img src="/logo/american-express.webp"></img>
            </div>
            <div className={styles.text_container}>
              <p className={styles.text_1}>Card ending in 0003</p>
              <p className={styles.text_2}>Expires 03/2020</p>
            </div>
            <div className={styles.btn_group}>
              <div className={styles.dropdown}>
                <ThreeDot />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Payment
