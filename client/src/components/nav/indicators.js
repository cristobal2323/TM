import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Admin = (props) => (
  <li className="relative">
    <button
      id="menu-500"
      href="#person"
      data-menu="ok"
      className={`arrow ${props.mobile}`}
      onClick={props.handleMenu}
      onKeyDown={props.handleMenu}
      data-child="sub--menu_500"
    >
      <i className="fas fa-chart-line"></i>
      <strong>
        <FormattedMessage id="Indicators" />
      </strong>
    </button>
    <div
      data-subbox="ok"
      id="sub--menu_500"
      className={`module--dashboardNav__subMenu ${props.mobile}`}
    >
      <div className="module--dashboardNav__subMenuBox">
        <Link
          to="/dashboard/home"
          id="submenu500-a"
          data-submenu="ok"
          onClick={props.handleSubMenu}
          onKeyDown={props.handleSubMenu}
        >
          <i className="far fa-clock"></i>
          <FormattedMessage id="Pending" />
        </Link>
        <Link
          to="/dashboard/home"
          id="submenu500-b"
          data-submenu="ok"
          onClick={props.handleSubMenu}
          onKeyDown={props.handleSubMenu}
          className={`${props.mobile}`}
        >
          <i className="far fa-check-circle"></i>
          <FormattedMessage id="ToAuthorize" />
        </Link>
        <Link
          to="/dashboard/home"
          id="submenu500-c"
          data-submenu="ok"
          onClick={props.handleSubMenu}
          onKeyDown={props.handleSubMenu}
          className={`${props.mobile}`}
        >
          <i className="far fa-times-circle"></i>
          <FormattedMessage id="ToFinalize" />
        </Link>
      </div>
    </div>
  </li>
);

export default Admin;
