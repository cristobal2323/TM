import React from "react";
import { Link } from "react-router-dom";

const Group = (props) => (
  <li>
    <Link
      to="/dashboard/instalation"
      id="menu-100"
      data-menu="ok"
      className={`${props.mobile}`}
      onClick={props.handleMenu}
      onKeyDown={props.handleMenu}
    >
      <i className="far fa-clock"></i>
      <strong>Group</strong>
    </Link>
  </li>
);

export default Group;
