import Link from 'next/link'
import React from 'react'
import styles from './Hero.module.css'
import CarouselComponent from './CarouselComponent'
import { useLocalizationContext } from '../../../context/LocalizationContext/LocalizationContext'

const Hero = () => {
  const { t } = useLocalizationContext()
  return (
    <section className={styles.container} id="home">
      <div className={styles.carousel}>
        <CarouselComponent />
      </div>

      <div className={styles.get_started_buttons}>
        <div className={styles.left}>
          <Link href="/signup">
            <a>
              <h1>{t.homePage.get_started_prosumer}</h1>
              <h2>{t.homePage.get_started_prosumer_desc}</h2>
            </a>
          </Link>
        </div>
        <div className={styles.right}>
          <Link href="/signup">
            <a>
              <h1>{t.homePage.get_started_consumer}</h1>
              <h2>{t.homePage.get_started_consumer_desc}</h2>
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
