import React from 'react'
import { useLocalizationContext } from '../../../context/LocalizationContext/LocalizationContext'
import styles from './Why.module.css'
const Why = () => {
  const { t } = useLocalizationContext()
  return (
    <section className={styles.why} id="why">
      <div className={styles.why_title}>
        <h2>{t.homePage.why_etp_title}</h2>
        <h1>{t.homePage.why_etp_subtitle}</h1>
      </div>

      <div className={styles.why_description}>
        <div className={styles.why_description_item}>
          <div className={styles.why_image_with_text}>
            <img src="/images/puzzle.svg"></img>
            <h1>{t.homePage.why_etp_desc1_title}</h1>
          </div>
          <p>{t.homePage.why_etp_desc1_p}</p>
        </div>

        <div className={styles.why_description_item}>
          <div className={styles.why_image_with_text}>
            <img src="/images/money.svg"></img>
            <h1>{t.homePage.why_etp_desc2_title}</h1>
          </div>
          <p>{t.homePage.why_etp_desc2_p}</p>
        </div>
        <div className={styles.why_description_item}>
          <div className={styles.why_image_with_text}>
            <img src="/images/stack.svg"></img>
            <h1>{t.homePage.why_etp_desc3_title}</h1>
          </div>
          <p>{t.homePage.why_etp_desc3_p}</p>
        </div>
        <div className={styles.why_description_item}>
          <div className={styles.why_image_with_text}>
            <img src="/images/package.svg"></img>
            <h1>{t.homePage.why_etp_desc4_title}</h1>
          </div>
          <p>{t.homePage.why_etp_desc4_p}.</p>
        </div>
      </div>
    </section>
  )
}

export default Why
