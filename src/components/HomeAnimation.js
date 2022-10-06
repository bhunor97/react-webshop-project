import React from "react";
// REACT-SPRING
import { useSpring, animated } from "react-spring";

const HomeAnimation = () => {
  const fadeOne = useSpring({
    to: { opacity: 1, marginLeft: 0 },
    from: { opacity: 0, marginLeft: -1000 },
    delay: 200,
  });

  const fadeTwo = useSpring({
    to: { opacity: 1, marginLeft: 0 },
    from: { opacity: 0, marginLeft: 1000 },
    delay: 200,
  });

  return (
    <div className="welcome-section">
      <animated.h1 style={fadeOne}>Welcome</animated.h1>
      <animated.h2 style={fadeTwo}>To</animated.h2>
      <animated.h3 style={fadeOne}>My</animated.h3>
      <animated.h2 style={fadeTwo}>React</animated.h2>
      <animated.h1 style={fadeOne}>Webshop</animated.h1>
    </div>
  );
};

export default HomeAnimation;
