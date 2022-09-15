import React from "react";
// REACT-BOOTSTRAP
import HomeButton from "../components/HomeButton";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// REDUX-TOOLKIT
import themeSwitchFunc from "../components/ThemeFunc";
import { useSelector } from "react-redux";

const Login = () => {
  const theme = useSelector((state) => state.setTheme.theme);

  return (
    <section className="login-section">
      <h1>Log In</h1>
      <div className="login-form d-flex justify-content-center align-items-center">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant={themeSwitchFunc(theme)} type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <HomeButton />
    </section>
  );
};

export default Login;
