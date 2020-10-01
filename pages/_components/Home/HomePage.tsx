import React from 'react'
import About from './About'
import Contact from './Contact'
import Header from './Header'
import Hero from './Hero'

import styles from './Home.module.css'
import Why from './Why'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <About />
      <Why />
      <Contact />
    </div>
  )
}

export default HomePage