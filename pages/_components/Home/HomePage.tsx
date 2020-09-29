import React from 'react'
import Header from './Header'
import Hero from './Hero'

import styles from './Home.module.css'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
    </div>
  )
}

export default HomePage
