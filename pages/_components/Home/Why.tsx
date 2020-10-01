import React from 'react'
import styles from './Why.module.css'
const Why = () => {
  return (
    <section className={styles.why} id="why">
      <div className={styles.why_title}>
        <h2>WHY ENERGY TRADING PLATFORM</h2>
        <h1>Do more with an end-to-end solution</h1>
      </div>

      <div className={styles.why_description}>
        <div className={styles.why_description_item}>
          <div className={styles.why_image_with_text}>
            <img src="/images/puzzle.svg"></img>
            <h1>No Middle Man</h1>
          </div>
          <p>Platform enables conflict-free energy trading without any intermediary</p>
        </div>

        <div className={styles.why_description_item}>
          <div className={styles.why_image_with_text}>
            <img src="/images/money.svg"></img>
            <h1>Low Distribution Cost</h1>
          </div>
          <p>Micro-grids dramatically reduce the cost of energy transportation</p>
        </div>
        <div className={styles.why_description_item}>
          <div className={styles.why_image_with_text}>
            <img src="/images/stack.svg"></img>
            <h1>Secure & Transparent</h1>
          </div>
          <p>Solar Bankers blockchain offers high level of security and complete trasparency.</p>
        </div>
        <div className={styles.why_description_item}>
          <div className={styles.why_image_with_text}>
            <img src="/images/package.svg"></img>
            <h1>Decentralized Power Generation</h1>
          </div>
          <p>Connecting small-scale generators to the local energy market.</p>
        </div>
      </div>
    </section>
  )
}

export default Why
