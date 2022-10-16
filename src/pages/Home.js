import { React } from "react";
// COMPONENTS
import HomeTechCards from "../components/HomeTechCards";
// WAVES
import HomeBottomWave from "../waves/home/HomeBottomWave";
import HomeTopWave from "../waves/home/HomeTopWave";
// REACT-SPRING
import { useSpring, animated } from "react-spring";
// CUSTOM SPRING ANIMATIONS
import { fade, rightSlide, leftSlide } from "../components/Animations";

const Home = () => {
  return (
    <section className="home-section">
      <animated.div style={useSpring(fade)}>
        <HomeTopWave />
      </animated.div>

      {/* HOME PAGE WELCOME MESSAGE */}
      <animated.h1 className="welcome-section" style={useSpring(leftSlide)}>
        Fake WebShop
      </animated.h1>

      {/* TECH-CARDS */}
      <HomeTechCards />
      <animated.div style={useSpring(fade)}>
        <HomeBottomWave />
      </animated.div>
    </section>
  );
};

export default Home;
