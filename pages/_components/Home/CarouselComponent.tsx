import React from 'react'
import styles from './Hero.module.css'

import { Carousel } from 'react-responsive-carousel'

const CarouselComponent = () => {
  return (
    <Carousel
      interval={3000}
      autoPlay={true}
      infiniteLoop={true}
      useKeyboardArrows={true}
      stopOnHover={true}
      swipeable={true}
    >
      <div className={styles.img_container}>
        <img src="/images/carousel2.webp" title="women with battery"></img>{' '}
        <h1 className={styles.slogan}>
          <span>An Easy Way</span>
          <h1>to Buy and Sell</h1>
          <h1>Electricity</h1>
        </h1>
      </div>
      <div className={styles.img_container}>
        <img src="/images/carousel1.webp" title="women with battery"></img>{' '}
        <h1 className={styles.slogan2}>
          <h1>Welcome to</h1>
          <h1>
            Energy <span>Trading</span> Platform
          </h1>
          <h2>by Solar Bankers</h2>
        </h1>
      </div>
    </Carousel>
  )
}

export default CarouselComponent
