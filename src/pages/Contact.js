import React from "react";
// COMPONENTS
import ContactForm from "../components/ContactForm";
import ContactMap from "../components/ContactMap";
// WAVES
import ContactTopWave from "../waves/contact/ContactTopWave";
import ContactBottomWave from "../waves/contact//ContactBottomWave";
// REACT-SPRING
import { useSpring, animated } from "react-spring";

const Contact = () => {
  const fade = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 200,
  });

  return (
    <section className="contact-section">
      <ContactTopWave />
      <h1>Contact</h1>

      <animated.div style={fade} className="form-map-container mt-5 p-2 shadow">
        <div className="form-container">
          <ContactForm />
        </div>
        <div className="map-container">
          <ContactMap />
        </div>
      </animated.div>
      <ContactBottomWave />
    </section>
  );
};

export default Contact;
