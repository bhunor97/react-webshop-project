import React from "react";
// COMPONENTS
import CartIcon from "../icons/CartIcon";
import themeSwitchFunc from "./ThemeFunc";
import GoogleOauthLogin from "../oauth/GoogleOauthLogin";
import UserIcon from "../icons/UserIcon";
import LogOutIcon from "../icons/LogOutIcon";
// REACT ROUTER
import { NavLink } from "react-router-dom";
// BOOTSTRAP
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// REDUX-TOOLKIT
import { useSelector } from "react-redux";

const MyNav = () => {
  const theme = useSelector((state) => state.setTheme.theme);
  const isSignedIn = useSelector((state) => state.getSignedIn.signedIn);

  return (
    <nav>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg={themeSwitchFunc(theme)}
        variant={themeSwitchFunc(theme)}
        className="shadow"
      >
        <Container>
          <Navbar.Brand>WebShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/products">
                Products
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            <Nav className="nav-right-icons">
              {/* GOOGLE LOGIN */}
              <Nav.Link>
                <GoogleOauthLogin />
              </Nav.Link>
              <Nav.Link disabled>
                {/* USER LOGGED IN / LOG OUT ICONS */}
                {isSignedIn === true ? <LogOutIcon /> : <UserIcon />}
              </Nav.Link>
              <Nav.Link as={NavLink} to="/mycart">
                My cart
              </Nav.Link>
              <Nav.Link as={NavLink} to="/mycart">
                <CartIcon />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};
{
  /* <UserIcon /> */
}

export default MyNav;
