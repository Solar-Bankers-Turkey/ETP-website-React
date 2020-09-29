import React from 'react'
import styles from './Profile.module.css'
import Button from '../../../../../components/Button/Button'
import Input from '../../../../../components/Input/Input'
import Textarea from '../../../../../components/Input/Textarea'
import { useLocalizationContext } from '../../../../../context/LocalizationContext/LocalizationContext'

const Profile = () => {
  const { t } = useLocalizationContext()
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t.common.profile_details}</h1>
      <div className={styles.select_profile_picture}>
        <div className={styles.profile_img}>
          <img
            loading="lazy"
            src="https://pecb.com/conferences/wp-content/uploads/2017/10/no-profile-picture.jpg"
          ></img>
          <div className={styles.desc}>
            <h1>{t.common.profile_picture}</h1>
            <p>{t.info.image_info_1000}</p>
          </div>
        </div>
        <Button variant="primary-contained">{t.form.upload}</Button>
      </div>
      <div className={styles.form_container}>
        <form onSubmit={e => e.preventDefault()}>
          <div className={styles.input_group}>
            <Input label={t.form.name} type="text" />
            <Input label={t.form.lastname} type="text" />
          </div>
          <div className={styles.input_group}>
            <Input label={t.form.email} type="text" />
            <Input label={t.form.phone_number} type="text" />
          </div>
          <div className={styles.input_group}>
            <Input label={t.form.tc_idenditity_number} type="text" />
            <Input label={t.form.birthday} type="date" />
          </div>
          <div className={styles.input_group}>
            <Textarea label={t.form.address} />
          </div>
          <Button variant="primary-contained">{t.form.submit}</Button>
        </form>
      </div>
    </div>
  )
}

export default Profile
