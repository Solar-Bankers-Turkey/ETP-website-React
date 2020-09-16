import React from 'react'
import styles from './Form.module.css'
import Button from '../../Button/Button'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLocalizationContext } from '../../../context/LocalizationContext/LocalizationContext'

const SignupForm = () => {
  const router = useRouter()
  const { t } = useLocalizationContext()
  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault()
          router.push('/dashboard')
        }}
        className={styles.login_container}
      >
        <label htmlFor="email">{t.form.email_address}</label>
        <input id="email" type="Email"></input>

        <label htmlFor="first">{t.form.name}</label>
        <input id="first" type="text"></input>

        <label htmlFor="last">{t.form.lastname}</label>
        <input id="last" type="text"></input>

        <Button type="submit" variant="primary-contained">
          {t.form.signup}
        </Button>
      </form>
      <p className={styles.link_forgot}>{t.info.policy}</p>

      <Link href="/signin">
        <a className={styles.link_signup}>
          {t.info.have_acc}
          <span> {t.form.signin}</span>
        </a>
      </Link>
    </>
  )
}

export default SignupForm
