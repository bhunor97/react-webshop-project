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
  const marginFade = useSpring({
    to: {
      marginLeft: 0,
    },
    from: {
      marginLeft: 1000,
    },
  });

  const opacityFade = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 500,
  });

  return (
    <section className="contact-section">
      <animated.div style={opacityFade}>
        <ContactTopWave />
      </animated.div>

      <animated.div style={marginFade}>
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
      <animated.div style={opacityFade}>
        <ContactBottomWave />
      </animated.div>
    </section>
  );
};

export default Contact;
