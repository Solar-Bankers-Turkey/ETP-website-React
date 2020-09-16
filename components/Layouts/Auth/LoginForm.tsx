import React from 'react'
import styles from './Form.module.css'
import Button from '../../Button/Button'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLocalizationContext } from '../../../context/LocalizationContext/LocalizationContext'

const LoginForm = () => {
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

        <label htmlFor="pw">{t.form.password}</label>
        <input id="pw" type="Password"></input>

        <Button type="submit" variant="primary-contained">
          {t.form.signin}
        </Button>
      </form>
      <p className={styles.link_forgot}>{t.form.forgot_password}</p>

      <Link href="/signup">
        <a className={styles.link_signup}>
          {t.info.dont_have_acc}
          <span> {t.form.signup}</span>
        </a>
      </Link>
    </>
  )
}

export default LoginForm
