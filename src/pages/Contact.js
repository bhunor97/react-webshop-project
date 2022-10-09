import React from "react";
// COMPONENTS
import ContactForm from "../components/ContactForm";
import ContactMap from "../components/ContactMap";
// WAVES
import ContactTopWave from "../waves/contact/ContactTopWave";
import ContactBottomWave from "../waves/contact//ContactBottomWave";
// REACT-SPRING
import { useSpring, animated } from "react-spring";
// CUSTOM SPRING ANIMATIONS
import { fade, leftSlide } from "../components/Animations";

const Contact = () => {
  return (
    <section className="contact-section pb-5">
      <animated.div style={useSpring(fade)}>
        <ContactTopWave />
      </animated.div>

      <animated.div style={useSpring(leftSlide)}>
        <h1>Contact</h1>
        <div className="form-map-container mt-5 p-2 shadow">
          <div className="form-container">
            <ContactForm />
          </div>
          <div className="map-container">
            <ContactMap />
          </div>
        </div>
      </animated.div>

      <animated.div style={useSpring(fade)}>
        <ContactBottomWave />
      </animated.div>
    </section>
  );
};

export default Contact;
