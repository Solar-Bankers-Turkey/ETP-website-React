import Link from 'next/link'
import React from 'react'

import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.container} id="home">
      <div className={styles.carousel}>
        <div className={styles.img_container}>
          <img src="/images/carousel2.jpg" title="women with battery"></img>
        </div>
      </div>

      <div className={styles.get_started_buttons}>
        <div className={styles.left}>
          <Link href="/signup">
            <a>
              <h1>Get Started as a prosumer</h1>
              <h2>Manage your Electricity and sell your Extra Easily</h2>
            </a>
          </Link>
        </div>
        <div className={styles.right}>
          <Link href="/signup">
            <a>
              <h1>Get Started as a Consumer</h1>
              <h2>Manage your Electricity Easily</h2>
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
