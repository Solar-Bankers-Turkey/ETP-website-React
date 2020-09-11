import React from 'react'
import styles from './Profile.module.css'
import Button from '../../../../../components/Button/Button'
import Input from '../../../../../components/Input/Input'
import Textarea from '../../../../../components/Input/Textarea'

const Profile = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Profile Details</h1>
      <div className={styles.select_profile_picture}>
        <div className={styles.profile_img}>
          <img
            loading="lazy"
            src="https://pecb.com/conferences/wp-content/uploads/2017/10/no-profile-picture.jpg"
          ></img>
          <div className={styles.desc}>
            <h1>Profile Picture</h1>
            <p>PNG or JPG. maximum 1000 pixel width and height</p>
          </div>
        </div>
        <Button variant="primary-contained">Upload</Button>
      </div>
      <div className={styles.form_container}>
        <form onSubmit={e => e.preventDefault()}>
          <div className={styles.input_group}>
            <Input label="Name" type="text" />
            <Input label="Lastname" type="text" />
          </div>
          <div className={styles.input_group}>
            <Input label="Email" type="text" />
            <Input label="Phone Number" type="text" />
          </div>
          <div className={styles.input_group}>
            <Input label="T.C. Identitiy Number" type="text" />
            <Input label="Birthday" type="date" />
          </div>
          <div className={styles.input_group}>
            <Textarea label="Address" />
          </div>
          <Button variant="primary-contained">Submit</Button>
        </form>
      </div>
    </div>
  )
}

export default Profile
