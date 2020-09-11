import React from 'react'
import styles from './PasswordChange.module.css'
import Input from '../../../../../components/Input/Input'
const PasswordChange = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Change Password</h1>
      <div className={styles.change_password_container}>
        <form className={styles.password_form}>
          <Input label="Current Password" type="password" />
          <h1>Forgot Password?</h1>
          <Input label="New Password" type="password" />
          <Input label="Confirm Password" type="password" />
        </form>
        <div className={styles.password_info_container}>
          <h1>Password Requirments</h1>
          <p>You must follow all the rules below to create a new password</p>
          <ul>
            <li>At least 8 characters</li>
            <li>A mixture of both uppercase and lowercase letters</li>
            <li>A mixture of letters and numbers</li>
            <li>Inclusion of at least one special character [!&nbsp;@&nbsp;#&nbsp;?]</li>
            <li>Cannot be the same as the previous password</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PasswordChange
