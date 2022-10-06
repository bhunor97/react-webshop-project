import React from "react";
import HomeButton from "../components/HomeButton";
// WAVES
import ContactTopWave from "../waves/contact/ContactTopWave";
import ContactBottomWave from "../waves/contact//ContactBottomWave";

const Contact = () => {
  return (
    <section className="contact-section">
      <ContactTopWave />
      <h1>Contact</h1>
      <ContactBottomWave />
    </section>
  );
};

export default Contact;
