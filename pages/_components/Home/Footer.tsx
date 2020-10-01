import React from 'react'
import FacebookIcon from '../../../components/Icons/SocialIcons/FacebookIcon'
import LinkedinIcon from '../../../components/Icons/SocialIcons/LinkedinIcon'
import TelegramIcon from '../../../components/Icons/SocialIcons/TelegramIcon'
import TwitterIcon from '../../../components/Icons/SocialIcons/TwitterIcon'
import styles from './Footer.module.css'
import cx from 'classnames'

const Footer = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.social_links_container}>
        <li className={cx(styles.social_link, styles.facebook)}>
          <a href="https://www.facebook.com/solarbankerseurope/n" target="_blank" rel="noopener">
            <FacebookIcon />
          </a>
        </li>
        <li className={cx(styles.social_link, styles.twitter)}>
          <a href="https://twitter.com/solarbankers_?lang=en" target="_blank" rel="noopener">
            <TwitterIcon />
          </a>
        </li>
        <li className={cx(styles.social_link, styles.telegram)}>
          <a href="https://t.me/solarbankersICO" target="_blank" rel="noopener">
            <TelegramIcon />
          </a>
        </li>
        <li className={cx(styles.social_link, styles.linkedin)}>
          <a href="https://www.linkedin.com/company/solar-bankers-turkey/" target="_blank" rel="noopener">
            <LinkedinIcon />
          </a>
        </li>
      </ul>
      <p>© Solarbankers. 2020 Energy Trading Platform. All rights reserved.</p>
    </div>
  )
}

export default Footer
