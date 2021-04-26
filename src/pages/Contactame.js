import React, { useState, useEffect } from 'react'
import Header from './../components/Header';
import Footer from './../components/Footer';
import HeroBanner from './../components/HeroBanner';
import UnderConstruction from './../components/UnderConstruction';
import PriceColumn from './../components/PriceColumn';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import emailjs from 'emailjs-com';

export default function Contactame() {
  const { t, i18n } = useTranslation();
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('', '', e.target, '')
    .then((result) => {
        console.log(result.text);
        setFormSent(true);
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <div>
      <Header whiteStyle={true} transparent={false}></Header>
      <section className="section-contact-us">
        <div className="section-content contact-us-container">
          <div className="contact-us__text">
            <h1>{t("contact_us_title")}</h1>
            <p>{t("contact_us_text")}</p>
            <p>{t(process.env.REACT_APP_TEST_ENV_VARIABLE)}</p>
          </div>
          <div className="contact-us__form">
            { formSent &&
              <div className="contact-us__form-sent">
                {t("contact_form_sent")}
              </div>
            }
            <form className={`branded-form${formSent ? " -blocked" : ""}`} onSubmit={sendEmail}>
              <div className="branded-form__multiple-input-row">
                <div className="branded-input-container">
                  <label>{t("name")+' *'}</label>
                  <input type="text" name="name" required />
                </div>
                <div className="branded-input-container">
                  <label>{t("lastname")+' *'}</label>
                  <input type="text" name="lastname" required />
                </div>
              </div>
              <div className="branded-form__single-row">
                <div className="branded-input-container">
                  <label>{t("email")+' *'}</label>
                  <input type="email" name="email" required />
                </div>
              </div>
              <div className="branded-form__single-row">
                <div className="branded-input-container">
                  <label>{t("message")+' *'}</label>
                  <textarea name="message" required />
                </div>
              </div>
              <div className="branded-form__submit">
                <input type="submit" className="regular-button -secondary-style" value={t("send")} />
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}
