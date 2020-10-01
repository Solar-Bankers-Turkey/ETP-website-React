import React from 'react'
import MailIcon from '../../../components/Icons/MailIcon'
import MapIcon from '../../../components/Icons/MapIcon'
import TelephoneIcon from '../../../components/Icons/TelephoneIcon'
import styles from './Contact.module.css'
const Contact = () => {
  return (
    <>
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

      <section className={styles.contact_container}>
        <div className={styles.contact_links}>
          <div className={styles.contact_icon}>
            <TelephoneIcon />
          </div>
          <div className={styles.contact_text}>
            <h1>Bizi arayın</h1>
            <h2>+90(232)503 6718</h2>
          </div>
        </div>
        <div className={styles.contact_links}>
          <div className={styles.contact_icon}>
            <MailIcon />
          </div>
          <div className={styles.contact_text}>
            <h1>Bize e-posta gönderin</h1>
            <h2>info@solarbankers.org</h2>
          </div>
        </div>
        <div className={styles.contact_links}>
          <div className={styles.contact_icon}>
            <MapIcon />
          </div>
          <div className={styles.contact_text}>
            <h1>Adres</h1>
            <h2>Mah. Gülbahçhe Cad. İYTE Teknopark İzmir A9 Binası, No. 1/44/4 Urla/İzmir</h2>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
