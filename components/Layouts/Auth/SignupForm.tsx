import React from 'react'
import styles from './Form.module.css'
import Button from '../../Button/Button'
import Link from 'next/link'
import { useRouter } from 'next/router'

const SignupForm = () => {
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

        <label htmlFor="first">First Name</label>
        <input id="first" type="text"></input>

        <label htmlFor="last">Last Name</label>
        <input id="last" type="text"></input>

        <Button type="submit" variant="primary-contained">
          Sign in
        </Button>
      </form>
      <p className={styles.link_forgot}>
        By clicking sign up, you agree to the Solar Bankers User Agreement, Privacy Policy, and Cookie Policy.
      </p>

      <Link href="/signin">
        <a className={styles.link_signup}>
          Already have an account?<span>Sign In</span>
        </a>
      </Link>
    </>
  )
}

export default SignupForm
