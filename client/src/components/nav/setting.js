import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Admin = (props) => (
  <li className="relative">
    <button
      id="menu-800"
      href="#person"
      data-menu="ok"
      className={`arrow ${props.mobile}`}
      onClick={props.handleMenu}
      onKeyDown={props.handleMenu}
      data-child="sub--menu_800"
    >
      <i className="fas fa-wrench"></i>
      <strong>
        <FormattedMessage id="Setting" />
      </strong>
    </button>
    <div
      data-subbox="ok"
      id="sub--menu_800"
      className={`module--dashboardNav__subMenu ${props.mobile}`}
    >
      <div className="module--dashboardNav__subMenuBox">
        <Link
          to="/dashboard/home"
          id="submenu800-a"
          data-submenu="ok"
          onClick={props.handleSubMenu}
          onKeyDown={props.handleSubMenu}
        >
          <i className="far fa-clock"></i>
          <FormattedMessage id="Pending" />
        </Link>
        <Link
          to="/dashboard/home"
          id="submenu800-b"
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
          id="submenu800-c"
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
