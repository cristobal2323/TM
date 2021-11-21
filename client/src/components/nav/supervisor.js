import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Supervisor = (props) => (
  <li>
    <Link
      to="/dashboard/supervisor"
      id="menu-600"
      data-menu="ok"
      className={`${props.mobile}`}
      onClick={props.handleMenu}
      onKeyDown={props.handleMenu}
    >
      <i className="fas fa-user-check"></i>
      <strong>
        <FormattedMessage id="Supervisor" />
      </strong>
    </Link>
  </li>
);

export default Supervisor;
