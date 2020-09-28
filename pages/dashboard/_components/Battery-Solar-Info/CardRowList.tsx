import React from 'react'
import { useLocalizationContext } from '../../../../context/LocalizationContext/LocalizationContext'
import CardRow from './CardRow'
import styles from './Card.module.css'

const CardRowList = ({ children }) => {
  return <ul className={styles.row_container}>{children}</ul>
}

export default CardRowList
