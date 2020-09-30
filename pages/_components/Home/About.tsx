import React from 'react'
import styles from './Home.module.css'

const About = () => {
  return (
    <section className={styles.about} id="about">
      <span>
        <p>ABOUT US</p>
        <h1>
          We provide technology smart enough<br></br> to save your power and sell the extra.
        </h1>
      </span>
      <div className={styles.image_with_text}>
        <img src="/images/laptop-and-iphone.png" alt="iphone and laptop"></img>
        <div>
          <h1>Peer-to-Peer Energy Trading</h1>
          <p>
            Solar Bankers is developing a Peer-to-peer online platform that enables end users to trade electricity among
            themselves in a free, open market. It is simple, fast, secure and powered by the Solar Bankers Blockchain.
            Our vision is to open up the energy market, allowing for greater total energy production, and a variety of
            choices for energy customers.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
