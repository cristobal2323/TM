import React from "react";

import { Link } from "react-router-dom";

const MyButton = (props) => {
  return (
    <div className="module-table--button">
      <div className="module-table--button-text">
        <h1>Stains</h1>
        <h2>List Stains</h2>
      </div>
      <div className="module-table--button-add">
        <Link
          to={{
            pathname: "/dashboard/add_stain",
          }}
        >
          <button>New Stain</button>
        </Link>
      </div>
    </div>
  );
};

export default MyButton;
