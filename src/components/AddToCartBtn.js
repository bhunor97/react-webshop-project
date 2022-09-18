import React from "react";
// COMPONENTS
import themeSwitchFunc from "./ThemeFunc";
import CartIcon from "../icons/CartIcon";
// BOOTSTRAP
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
// FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
// REDUX-TOOLKIT
import { useSelector } from "react-redux";

const AddToCartBtn = () => {
  const theme = useSelector((state) => state.setTheme.theme);

  // NOT LOGGED TOOLTIP
  const notLoggedTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Please log-in first!
      <span>
        <FontAwesomeIcon icon={faLock} className="px-1" />
      </span>
    </Tooltip>
  );

  return (
    <div className="d-grid gap-2">
      {/* bootstrap-tooltip */}
      <OverlayTrigger
        placement="right"
        delay={{ show: 200, hide: 400 }}
        overlay={notLoggedTooltip}
      >
        <Button variant={themeSwitchFunc(theme)} size="lg">
          Add To Cart
          <span className="add-to-cart-icon-span p-2 ">
            <CartIcon />
          </span>
        </Button>
      </OverlayTrigger>
    </div>
  );
};

export default AddToCartBtn;
