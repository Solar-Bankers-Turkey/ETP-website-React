import React from 'react'
import styles from './PasswordChange.module.css'
import Input from '../../../../../components/Input/Input'
import { useLocalizationContext } from '../../../../../context/LocalizationContext/LocalizationContext'
const PasswordChange = () => {
  const { t } = useLocalizationContext()
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t.form.change_password}</h1>
      <div className={styles.change_password_container}>
        <form className={styles.password_form}>
          <Input label={t.form.current_password} type="password" />
          <h1>{t.form.forgot_password}</h1>
          <Input label={t.form.new_password} type="password" />
          <Input label={t.form.confirm_password} type="password" />
        </form>
        <div className={styles.password_info_container}>
          <h1>{t.info.password_requirments.title}</h1>
          <p>{t.info.password_requirments.info}</p>
          <ul>
            {t.info.password_requirments.option.map(e => {
              return <li>{e}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PasswordChange
