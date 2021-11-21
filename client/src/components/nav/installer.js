import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Installer = (props) => (
  <li>
    <Link
      to="/dashboard/installer"
      id="menu-400"
      data-menu="ok"
      className={`${props.mobile}`}
      onClick={props.handleMenu}
      onKeyDown={props.handleMenu}
    >
      <i className="fas fa-user-tag"></i>
      <strong>
        <FormattedMessage id="Installer" />
      </strong>
    </Link>
  </li>
);

export default Installer;
