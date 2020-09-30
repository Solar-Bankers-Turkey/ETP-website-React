import React from 'react'
import styles from './Contact.module.css'
const Contact = () => {
  return (
    <section className={styles.container} id="contact">
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
      <p>You'll hear from us within 1-2 business days.</p>
    </section>
  )
}

export default Contact
