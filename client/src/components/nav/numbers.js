import React from "react";
import { Link } from "react-router-dom";

const Mapa = (props) => (
  <li>
    <Link
      to="/dashboard/home"
      id="menu-2"
      href="#numbers"
      data-menu="ok"
      className={`${props.mobile}`}
      onClick={props.handleMenu}
      onKeyDown={props.handleMenu}
    >
      <i className="fas fa-sort-numeric-up-alt"></i>
      <strong>Números</strong>
    </Link>
  </li>
);

export default Mapa;
