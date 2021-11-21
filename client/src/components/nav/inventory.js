import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Inventory = (props) => (
  <li>
    <Link
      to="/dashboard/inventory"
      id="menu-300"
      data-menu="ok"
      className={`${props.mobile}`}
      onClick={props.handleMenu}
      onKeyDown={props.handleMenu}
    >
      <i className="fas fa-clipboard-list"></i>
      <strong>
        <FormattedMessage id="Inventory" />
      </strong>
    </Link>
  </li>
);

export default Inventory;
