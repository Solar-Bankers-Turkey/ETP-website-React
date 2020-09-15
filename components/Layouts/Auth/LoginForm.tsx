import React from 'react'
import styles from './Form.module.css'
import Button from '../../Button/Button'
import Link from 'next/link'
import { useRouter } from 'next/router'

const LoginForm = () => {
  const router = useRouter()

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault()
          router.push('/dashboard')
        }}
        className={styles.login_container}
      >
        <label htmlFor="email">Email Address</label>
        <input id="email" type="Email"></input>

        <label htmlFor="pw">Password</label>
        <input id="pw" type="Password"></input>

        <Button type="submit" variant="primary-contained">
          Sign in
        </Button>
      </form>
      <p className={styles.link_forgot}>Forgot your password?</p>

      <Link href="/signup">
        <a className={styles.link_signup}>
          Don't have an account? <span>Sign Up</span>
        </a>
      </Link>
    </>
  )
}

export default LoginForm
