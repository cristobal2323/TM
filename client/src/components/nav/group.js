import React from "react";
import { Link } from "react-router-dom";

const Group = (props) => (
  <li>
    <Link
      to="/dashboard/group"
      id="menu-100"
      data-menu="ok"
      className={`${props.mobile}`}
      onClick={props.handleMenu}
      onKeyDown={props.handleMenu}
    >
      <i className="fas fa-layer-group"></i>
      <strong>Group</strong>
    </Link>
  </li>
);

export default Group;
