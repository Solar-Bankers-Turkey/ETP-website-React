import React, { useEffect } from 'react'
import About from './About'
import Contact from './Contact'
import Header from './Header'
import Hero from './Hero'
import Why from './Why'

import styles from './Home.module.css'
import Footer from './Footer'

const HomePage = () => {
  useEffect(() => {
    window.document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      window.document.documentElement.style.scrollBehavior = 'unset'
    }
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/logo/solar-bankers-logo-black.png" alt="Solar Bankers Logo" />
      </div>
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
