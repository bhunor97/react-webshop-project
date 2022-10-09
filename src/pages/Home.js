import { React } from "react";
// COMPONENTS
import HomeAnimation from "../components/HomeAnimation";
// WAVES
import HomeBottomWave from "../waves/home/HomeBottomWave";
import HomeTopWave from "../waves/home/HomeTopWave";
// REACT-SPRING
import { useSpring, animated } from "react-spring";
// CUSTOM SPRING ANIMATIONS
import { fade, slide } from "../components/Animations";

const Home = () => {
  return (
    <section className="home-section">
      <animated.div style={useSpring(fade)}>
        <HomeTopWave />
      </animated.div>
      <HomeAnimation />

      <animated.div style={useSpring(fade)}>
        <HomeBottomWave />
      </animated.div>
    </section>
  );
};

export default Home;
