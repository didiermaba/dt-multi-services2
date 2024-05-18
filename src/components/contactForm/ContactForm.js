import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import config from "../../config";
import "./style/contact.scss";

const ContactForm = () => {
  const form = useRef();

  // useEffect(() => {
  //   emailjs.init("");
  // }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".formMessage");

    emailjs
      .sendForm(
        "service_gvc9jvk",
        "template_tp10vr1",
        form.current,
        config.REACT_APP_ID // Utilisation de la clé API depuis la configuration
      )
      .then(
        (res) => {
          console.log(res.text);
          form.current.reset(); // pr réinitialiser les inputs
          formMess.innerHTML = "<p className='success'>Message envoyé !</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },
        (error) => {
          console.log(error.text);
          formMess.innerHTML =
            "<p className='error'> Une erreur s'est produite, veuillez réessayer</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        }
      );
  };

  return (
    <div className="form-container">
      <h1>Contactez-nous</h1>
      <br />
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>Nom</label>
        <input type="text" name="name" required autoComplete="off" id="name" />
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          id="email"
        />
        <label>Message</label>
        <textarea name="message" required id="mess" />
        <input type="submit" value="Envoyer" className="hover button" />
      </form>
      <div className="formMessage"></div>
    </div>
  );
};

export default ContactForm;
