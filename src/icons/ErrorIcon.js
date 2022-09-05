import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const ErrorIcon = () => {
  return (
    <section>
      <FontAwesomeIcon icon={faTriangleExclamation} />
    </section>
  );
};

export default ErrorIcon;
