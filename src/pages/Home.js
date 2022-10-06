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

const Home = () => {
  const theme = useSelector((state) => state.setTheme.theme);

  return (
    <section className="home-section">
      <HomeTopWave />
      <HomeAnimation />
      <HomeBottomWave />
    </section>
  );
};

export default Home;
