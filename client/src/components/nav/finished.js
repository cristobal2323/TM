import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Home = (props) => (
  <li>
    <Link
      to="/dashboard/instalation_finished"
      id="menu-200"
      data-menu="ok"
      className={`${props.mobile}`}
      onClick={props.handleMenu}
      onKeyDown={props.handleMenu}
    >
      <i className="far fa-times-circle"></i>
      <strong>
        <FormattedMessage id="InstallationFinished" />
      </strong>
    </Link>
  </li>
);

export default Home;
