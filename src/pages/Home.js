import { React } from "react";
import waveThemeFunc from "../components/WaveTheme";
import HomeBottomWave from "../waves/home/HomeBottomWave";
import HomeTopWave from "../waves/home/HomeTopWave";
// FIREBASE
import GoogleOauthLogin from "../oauth/GoogleOauthLogin";
// REDUX-TOOLKIT
import { useSelector } from "react-redux";

const Home = () => {
  const theme = useSelector((state) => state.setTheme.theme);

  return (
    <section className="home-section">
      <HomeBottomWave />
      <HomeTopWave />
    </section>
  );
};

export default Home;
