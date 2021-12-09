import React, {useRef, useState } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import "./stylesContactForm.css";
import './snackbar.css';
import snackbar from "snackbar";
import ClientCaptcha from "react-client-captcha";

import data from "./data";
init("user_kPgH3peyjBxPbk7qgUe3Z");
const ContactForm = ({ language }) => {
/* Captcha */
  const [captchaCode, setCaptchaCode] = useState("");
  const [captchaCodeInput, setCaptchaCodeInput] = useState("");

  const oncaptchaChange = (e) => {
    setCaptchaCodeInput(e.target.value);
  };

  
  const form = useRef();
  function sendMessage(event) {
    event.preventDefault();
  
    if (captchaCodeInput === captchaCode) {
      emailjs
        .sendForm(
          "service_nn3f4o8",
          "template_0hk8y4g",
          form.current,
          "user_REhijpEyoya6KkwTmhJi3"
        )
        .then(
          (result) => {
            console.log(result.text);
            snackbar.gap = 950;
            snackbar.duration = 3000;
            return snackbar.show(data[language].sendedMessageConfirm);
          },
          (error) => {
            console.log(error.text);
            snackbar.duration = 2000;
            return snackbar.show(data[language].sendedMessageConfirm);
          }
        );
      event.target.reset();
      setCaptchaCodeInput('')
    } else {
     

      snackbar.duration = 2000;
      return (
        snackbar.show(data[language].sendedMessageError)
      )
    }
    }
  return (
    <div id="mail">
      <h3>{data[language].contactNav}</h3>
      <div className="container">
        <form ref={form} onSubmit={sendMessage} className="form">
          <label htmlFor="fname">{data[language].name}</label>
          <input
            defaultValue=""
            type="text"
            id="fname"
            name="name"
            placeholder="Name.."
            required={true}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email.."
            name="email"
            required={true}
            defaultValue=""
          />
          <label htmlFor="message">{data[language].message}</label>
          <textarea
            required={true}
            id="message"
            name="message"
            placeholder={data[language].messageArea}
            rows="10"
          ></textarea>

          {/*-------------- Captcha -----------------*/}

          <ClientCaptcha captchaCode={setCaptchaCode} />
          <input
            type="text"
            id="captcha"
            name="captcha"
            required={true}
            placeholder={data[language].captchaPlaceholder}
            value={captchaCodeInput}
            onChange={oncaptchaChange}
          />

          {/*-------------- Submit -----------------*/}

          <input type="submit" value={data[language].sendName} />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
