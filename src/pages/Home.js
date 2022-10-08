import { React } from "react";
// COMPONENTS
import HomeAnimation from "../components/HomeAnimation";
// WAVES
import HomeBottomWave from "../waves/home/HomeBottomWave";
import HomeTopWave from "../waves/home/HomeTopWave";
// FIREBASE
import GoogleOauthLogin from "../oauth/GoogleOauthLogin";
// REDUX-TOOLKIT
import { useSelector } from "react-redux";
// REACT-SPRING
import { useSpring, animated } from "react-spring";

const Home = () => {
  const theme = useSelector((state) => state.setTheme.theme);

  const opacityFade = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 500,
  });

  return (
    <section className="home-section">
      <animated.div style={opacityFade}>
        <HomeTopWave />
      </animated.div>
      <HomeAnimation />

      <animated.div style={opacityFade}>
        <HomeBottomWave />
      </animated.div>
    </section>
  );
};

export default Home;
