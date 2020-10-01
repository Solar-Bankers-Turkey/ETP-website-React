import React from 'react'
import About from './About'
import Contact from './Contact'
import Header from './Header'
import Hero from './Hero'
import Why from './Why'

import styles from './Home.module.css'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <About />
      <Why />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage
