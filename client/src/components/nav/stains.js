import React from "react";
import { Link } from "react-router-dom";

const Stains = (props) => (
  <li>
    <Link
      to="/dashboard/home"
      id="menu-2"
      data-menu="ok"
      className={`${props.mobile}`}
      onClick={props.handleMenu}
      onKeyDown={props.handleMenu}
    >
      <i className="fas fa-th"></i>
      <strong>Stains</strong>
    </Link>
  </li>
);

export default Stains;
