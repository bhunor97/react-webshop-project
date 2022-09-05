import React from "react";
import ErrorIcon from "../icons/ErrorIcon";
import HomeButton from "../components/HomeButton";

const Error = () => {
  return (
    <section>
      <h1>
        404 Page Not Found
        <ErrorIcon />
      </h1>
      <HomeButton />
    </section>
  );
};

export default Error;
