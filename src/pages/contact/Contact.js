import React from "react";
import Navbar from "../../components/Navbar";
import Mouse from "../../components/Mouse";
import ContactForm from "../../components/contactForm/ContactForm";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { motion } from "framer-motion";
// import SocialNetWork from "../../components/socialNetwork/SocialNetwork";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 300,
    },
  };

  return (
    <div>
      <Mouse />
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        transition={{ duration: 0.4 }}
        className="contact"
      >
        <Navbar />
        <ContactForm />
        <br />
        <br />
        <br />
        <div className="footer">
          <div className="contact-infos">
            <div className="address">
              <div className="content">
                <h4>Adresse</h4>
                <p>12 rue de Freycinet</p>
                <p>92600 Asnières-sur-seine</p>
              </div>
            </div>
            <div className="phone">
              <div className="content">
                <h4>Téléphone</h4>
                <CopyToClipboard text="0642844284" className="hover">
                  <p
                    style={{ cursor: "pointer" }}
                    className="clipboard"
                    onClick={() => alert("Téléphone copié !")}
                  >
                    06 27 43 14 55
                  </p>
                </CopyToClipboard>
              </div>
            </div>
            <div className="email">
              <div className="content">
                <h4>Email</h4>
                <CopyToClipboard
                  text="diathoms.pro@gmail.com"
                  className="hover"
                >
                  <p
                    style={{ cursor: "pointer" }}
                    className="clipboard"
                    onClick={() => alert("Email copié !")}
                  >
                    diathoms.pro@gmail.com
                  </p>
                </CopyToClipboard>
              </div>
            </div>
          </div>
          <div className="credits">
            <p>
              © 2024 &middot;<a href="#"> Didier MABA</a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
