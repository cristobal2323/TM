import React, { useEffect, useRef } from "react";
import { FormattedMessage } from "react-intl";

const Config = (props) => {
  const node = useRef();
  const parent = useRef();

  const handleClickHide = (e) => {
    if (parent.current.contains(e.target)) {
      document.getElementById("config-header").classList.add("active");
    } else if (!node.current.contains(e.target)) {
      document.getElementById("config-header").classList.remove("active");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickHide);
    return () => {
      document.removeEventListener("mousedown", handleClickHide);
    };
  }, []);

  return (
    <div ref={parent} className="module--dashboardHeaderName">
      <div className="module--dashboardHeaderName__avatar">
        {props.nameShort}
      </div>
      <h2>{props.email}</h2>
      <div
        ref={node}
        id="config-header"
        className="module--dashboardHeaderName__menu"
      >
        <ul>
          <li>
            <span onClick={() => props.setModalUser(true)}>
              <i className="fas fa-user" />
              <strong>
                <FormattedMessage id="Profile" />
              </strong>
            </span>
          </li>
          <li>
            <span onClick={() => props.setModal(true)}>
              <i className="fas fa-cogs" />
              <strong>
                <FormattedMessage id="Password" />
              </strong>
            </span>
          </li>
          <li>
            <span onClick={() => props.setModalLanguage(true)}>
              <i className="fas fa-globe-americas"></i>
              <strong>
                <FormattedMessage id="Languages" />
              </strong>
            </span>
          </li>
          <li className="bottom">
            <a href="#closed" onClick={props.logOut} onKeyPress={props.logOut}>
              <i className="fas fa-sign-out-alt" />
              <strong>
                <FormattedMessage id="Logout" />
              </strong>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Config;
