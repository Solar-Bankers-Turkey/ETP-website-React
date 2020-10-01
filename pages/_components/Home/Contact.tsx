import React from 'react'
import styles from './Contact.module.css'
const Contact = () => {
  return (
    <section className={styles.container} id="contact">
      <div className={styles.image_wrapper}>
        <div className={styles.image_container_flower}>
          <img src="/images/flowers.svg" alt="flowers"></img>
        </div>
        <div className={styles.form_container}>
          <div className={styles.form_title}>
            <h1>Drop us a message</h1>
            <h2>Find the right solution.</h2>
          </div>

          <form className={styles.form}>
            <div className={styles.input_group}>
              <input placeholder="First Name"></input>
              <input placeholder="Last Name"></input>
            </div>
            <input placeholder="Email Address"></input>
            <textarea placeholder="Hi there, I would like to ..."></textarea>
            <button>Submit</button>
          </form>
        </div>
        <div className={styles.image_container_man}>
          <img src="/images/chatting-man.svg" alt="men standing and holding phone"></img>
        </div>
      </div>

      <p>You'll hear from us within 1-2 business days.</p>
    </section>
  )
}

export default Contact
