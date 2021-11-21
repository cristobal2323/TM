import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Control = (props) => (
  <li>
    <Link
      to="/dashboard/list_stock_control"
      id="menu-700"
      data-menu="ok"
      className={`${props.mobile}`}
      onClick={props.handleMenu}
      onKeyDown={props.handleMenu}
    >
      <i className="fas fa-sort-numeric-up-alt"></i>
      <strong>
        <FormattedMessage id="RangeControl" />
      </strong>
    </Link>
  </li>
);

export default Control;
