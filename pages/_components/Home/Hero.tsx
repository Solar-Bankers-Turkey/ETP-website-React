import React from 'react'

import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.carousel}>
        <div className={styles.img_container}>
          <img src="/images/carousel2.jpg" title="women with battery"></img>
        </div>
      </div>
    </section>
  )
}

export default Hero
