import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const ErrorIcon = () => {
  return (
    <span>
      <FontAwesomeIcon icon={faTriangleExclamation} />
    </span>
  );
};

export default ErrorIcon;
