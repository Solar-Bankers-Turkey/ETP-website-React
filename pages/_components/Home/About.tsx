import React from 'react'
import { useLocalizationContext } from '../../../context/LocalizationContext/LocalizationContext'
import styles from './About.module.css'

const About = () => {
  const { t } = useLocalizationContext()
  return (
    <section className={styles.about} id="about">
      <span>
        <p>{t.homePage.about_us}</p>
        <h1>{t.homePage.about_us_desc}</h1>
      </span>
      <div className={styles.image_with_text}>
        <img src="/images/laptop-and-iphone.png" alt="iphone and laptop"></img>
        <div>
          <h1>{t.homePage.peer_to_peer_title}</h1>
          <p>{t.homePage.peer_to_peer_desc}</p>
        </div>
      </div>
    </section>
  )
}

export default About
