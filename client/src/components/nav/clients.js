import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Clients = (props) => (
  <li>
    <Link
      to="/dashboard/clients"
      id="menu-301"
      data-menu="ok"
      className={`${props.mobile}`}
      onClick={props.handleMenu}
      onKeyDown={props.handleMenu}
    >
      <i className="fas fa-user-tie"></i>
      <strong>
        <FormattedMessage id="Clients" />
      </strong>
    </Link>
  </li>
);

export default Clients;
