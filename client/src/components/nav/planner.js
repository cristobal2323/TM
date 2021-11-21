import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Planner = (props) => (
  <li>
    <Link
      to="/dashboard/planner"
      id="menu-800"
      data-menu="ok"
      className={`${props.mobile}`}
      onClick={props.handleMenu}
      onKeyDown={props.handleMenu}
    >
      <i className="far fa-calendar-alt"></i>
      <strong>
        <FormattedMessage id="Planner" />
      </strong>
    </Link>
  </li>
);

export default Planner;
