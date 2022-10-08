import React from "react";
// REACT-BOOTSTRAP
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
// REDUX-TOOLKIT
import { useSelector } from "react-redux";
import themeSwitchFunc from "./ThemeFunc";

const ContactForm = () => {
  const theme = useSelector((state) => state.setTheme.theme);

  return (
    <Form>
      {/* NAME */}
      <Form.Group className="mb-3" controlId="formBasicName">
        <FloatingLabel
          controlId="floatingName"
          label="Name"
          className="mb-3 text-dark"
        >
          <Form.Control type="name" placeholder="Name" />
        </FloatingLabel>
      </Form.Group>

      {/* EMAIL */}
      <Form.Group className="mb-3 text-dark" controlId="formBasicEmail">
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3 text-dark"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Leave a message</Form.Label>
        <Form.Control as="textarea" className="contact-text-area" rows={10} />
      </Form.Group>
      <Button
        onClick={(e) => {
          e.preventDefault();
        }}
        variant={themeSwitchFunc(theme)}
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
