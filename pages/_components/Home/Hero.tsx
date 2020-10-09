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
        <Link href="/signup">
          <div className={styles.left}>
            <a>
              <h1>{t.homePage.get_started_prosumer}</h1>
              <h2>{t.homePage.get_started_prosumer_desc}</h2>
            </a>
          </div>
        </Link>
        <Link href="/signup">
          <div className={styles.right}>
            <a>
              <h1>{t.homePage.get_started_consumer}</h1>
              <h2>{t.homePage.get_started_consumer_desc}</h2>
            </a>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Hero
