import React from "react";
// COMPONENTS
import themeSwitchFunc from "./ThemeFunc";
import CartIcon from "../icons/CartIcon";
// BOOTSTRAP
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
// REDUX-TOOLKIT
import { useSelector } from "react-redux";

const AddToCartBtn = () => {
  // bootstrap-tooltip
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Please log-in first!
    </Tooltip>
  );
  const theme = useSelector((state) => state.setTheme.theme);

  return (
    <div className="d-grid gap-2">
      {/* bootstrap-tooltip */}
      <OverlayTrigger
        placement="right"
        delay={{ show: 200, hide: 400 }}
        overlay={renderTooltip}
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
