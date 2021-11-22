import React from "react";

import { Link } from "react-router-dom";

const MyButton = (props) => {
  return (
    <div className="module-table--button">
      <div className="module-table--button-text">
        <h1>Group</h1>
        <h2>List groups</h2>
      </div>
      <div className="module-table--button-add">
        <Link
          to={{
            pathname: "/dashboard/add_group",
          }}
        >
          <button>New group</button>
        </Link>
      </div>
    </div>
  );
};

export default MyButton;
