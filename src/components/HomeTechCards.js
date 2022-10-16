import React from "react";
// REACT-ROUTER-DOM
import { Link } from "react-router-dom";
// REACT-BOOTSTRAP
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
// REEDUX-TOOLKIT
import { useSelector } from "react-redux";
import themeSwitchFunc from "./ThemeFunc";
// REACT-SPRING
import { useSpring, animated } from "react-spring";
// CUSTOM SPRING ANIMATIONS
import {
  fade,
  leftSlide,
  rightSlide,
  rotate,
  bottomSlide,
} from "../components/Animations";

const HomeTechCards = () => {
  const theme = useSelector((state) => state.setTheme.theme);

  // LOGO PICTURES
  const reactLogo = "https://reactjs.org/logo-og.png";
  const reactLink = "https://reactjs.org/";

  const bootstrapLogo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png";
  const reactBootstrapLink = "https://react-bootstrap.github.io/";

  const firebaseLogo =
    "https://miro.medium.com/max/300/1*R4c8lHBHuH5qyqOtZb3h-w.png";
  const firebaseLink = "https://firebase.google.com/";

  const sassLogo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png";
  const sassLink = "https://sass-lang.com/";

  const fakeStoreLogo = "https://fakestoreapi.com/icons/logo.png";
  const fakeStoreLink = "https://fakestoreapi.com/";

  const reactSpringLogo =
    "https://camo.githubusercontent.com/973c99d17e4ce72d08c4433449045d8391948711f11ac5f328a585e2a7bc8663/68747470733a2f2f692e696d6775722e636f6d2f515a6f776e68672e706e67";
  const reactSpring = "https://react-spring.dev/";

  const reduxToolkitLogo =
    "https://repository-images.githubusercontent.com/347723622/92065800-865a-11eb-9626-dff3cb7fef55";
  const reduxToolkitLink = "https://redux-toolkit.js.org/";

  const reactRouterLogo =
    "https://res.cloudinary.com/practicaldev/image/fetch/s--bvQtwOo5--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://reacttraining.com/images/blog/reach-react-router-future.png";
  const reactRouterLink = "https://reactrouter.com/en/main";

  return (
    <div className="tech-card-container">
      <animated.h3 style={useSpring(fade)} className="text-center">
        Technology used
      </animated.h3>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <animated.div style={useSpring(fade)}>
            <ListGroup>
              <a href={reactLink} target="_blank" className="tech-link">
                <ListGroup.Item
                  variant={themeSwitchFunc(theme)}
                  className="tech-list-item d-flex flex-row align-items-center justify-content-between"
                >
                  React
                  <animated.div style={useSpring(fade)}>
                    <Image
                      src={reactLogo}
                      roundedCircle
                      className="tech-circle shadow"
                    ></Image>
                  </animated.div>
                </ListGroup.Item>
              </a>

              <a
                href={reactBootstrapLink}
                target="_blank"
                className="tech-link"
              >
                <ListGroup.Item
                  className="tech-list-item d-flex flex-row align-items-center justify-content-between"
                  variant={themeSwitchFunc(theme)}
                >
                  React-Bootstrap
                  <animated.div style={fade}>
                    <Image
                      src={bootstrapLogo}
                      roundedCircle
                      className="tech-circle shadow"
                    ></Image>
                  </animated.div>
                </ListGroup.Item>
              </a>

              <a href={firebaseLink} target="_blank" className="tech-link">
                <ListGroup.Item
                  className="tech-list-item d-flex flex-row align-items-center justify-content-between"
                  variant={themeSwitchFunc(theme)}
                >
                  Firebase
                  <Image
                    src={firebaseLogo}
                    roundedCircle
                    className="tech-circle shadow"
                  ></Image>
                </ListGroup.Item>
              </a>

              <a href={sassLink} target="_blank" className="tech-link">
                <ListGroup.Item
                  className="tech-list-item d-flex flex-row align-items-center justify-content-between"
                  variant={themeSwitchFunc(theme)}
                >
                  Sass
                  <Image
                    src={sassLogo}
                    roundedCircle
                    className="tech-circle shadow"
                  ></Image>
                </ListGroup.Item>
              </a>
            </ListGroup>
          </animated.div>
        </Col>

        <Col>
          <animated.div style={useSpring(fade)}>
            <ListGroup>
              <a href={fakeStoreLink} target="_blank" className="tech-link">
                <ListGroup.Item
                  className="tech-list-item d-flex flex-row align-items-center justify-content-between"
                  variant={themeSwitchFunc(theme)}
                >
                  FakeStore Api
                  <Image
                    src={fakeStoreLogo}
                    roundedCircle
                    className="tech-circle shadow"
                  ></Image>
                </ListGroup.Item>
              </a>

              <a href={reactSpring} target="_blank" className="tech-link">
                <ListGroup.Item
                  className="tech-list-item d-flex flex-row align-items-center justify-content-between"
                  variant={themeSwitchFunc(theme)}
                >
                  React-Spring
                  <Image
                    src={reactSpringLogo}
                    roundedCircle
                    className="tech-circle shadow"
                  ></Image>
                </ListGroup.Item>
              </a>

              <a href={reduxToolkitLink} target="_blank" className="tech-link">
                <ListGroup.Item
                  className="tech-list-item d-flex flex-row align-items-center justify-content-between"
                  variant={themeSwitchFunc(theme)}
                >
                  Redux-Toolkit
                  <Image
                    src={reduxToolkitLogo}
                    roundedCircle
                    className="tech-circle shadow"
                  ></Image>
                </ListGroup.Item>
              </a>

              <a href={reactRouterLink} target="_blank" className="tech-link">
                <ListGroup.Item
                  className="tech-list-item d-flex flex-row align-items-center justify-content-between"
                  variant={themeSwitchFunc(theme)}
                >
                  React-Router
                  <Image
                    src={reactRouterLogo}
                    roundedCircle
                    className="tech-circle shadow"
                  ></Image>
                </ListGroup.Item>
              </a>
            </ListGroup>
          </animated.div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeTechCards;
