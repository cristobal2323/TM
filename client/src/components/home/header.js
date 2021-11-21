import React from "react";

const MyHeader = (props) => {
  return (
    <header className="header--search">
      <div className="box-header left">
        <i className="fas fa-search"></i>
        <input
          defaultValue={props.search}
          onChange={props.handleSearch}
          type="text"
          className="input-search"
          placeholder={"search"}
        />
      </div>
    </header>
  );
};

export default MyHeader;
