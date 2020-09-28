import React from 'react'
import { useLocalizationContext } from '../../../../context/LocalizationContext/LocalizationContext'
import Card from './Card'
import styles from './Card.module.css'

const CardList = ({ children }) => {
  const { t } = useLocalizationContext()
  return <ul className={styles.container}>{children}</ul>
}

export default CardList
