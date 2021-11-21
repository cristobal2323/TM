import React from "react";
import { FormattedMessage } from "react-intl";

const MyButton = (props) => {
  return (
    <div className="module-table--button">
      <div className="module-table--button-text">
        <h1>
          <FormattedMessage id="InstallationCompleted" />
        </h1>
        <h2>
          <FormattedMessage id="MasterListOfCompletedInstallations" />
        </h2>
      </div>
      <div className="module-table--button-add">
        <div className="sort-container">
          <i className="fas fa-ellipsis-h icon-sort"></i>
          <div className="sort-container-submenu">
            <ul>
              <li
                onClick={() =>
                  props.handleSort({
                    value: props.sort.vencimiento,
                    name: "vencimiento",
                  })
                }
              >
                <strong>
                  {props.sort.vencimiento === "ASC" ? (
                    <i className="fas fa-arrow-up"></i>
                  ) : (
                    <i className="fas fa-arrow-down"></i>
                  )}
                </strong>
                <FormattedMessage id="DueDate" />
              </li>
              <li
                onClick={() =>
                  props.handleSort({
                    value: props.sort.instalador_username,
                    name: "instalador_username",
                  })
                }
              >
                <strong>
                  {props.sort.instalador_username === "ASC" ? (
                    <i className="fas fa-arrow-up"></i>
                  ) : (
                    <i className="fas fa-arrow-down"></i>
                  )}
                </strong>
                <FormattedMessage id="Installer" />
              </li>
              <li
                onClick={() =>
                  props.handleSort({
                    value: props.sort.supervisor_username,
                    name: "supervisor_username",
                  })
                }
              >
                <strong>
                  {props.sort.supervisor_username === "ASC" ? (
                    <i className="fas fa-arrow-up"></i>
                  ) : (
                    <i className="fas fa-arrow-down"></i>
                  )}
                </strong>
                <FormattedMessage id="Supervisor" />
              </li>
              <li
                onClick={() =>
                  props.handleSort({
                    value: props.sort.correlativo,
                    name: "correlativo",
                  })
                }
              >
                <strong>
                  {props.sort.correlativo === "ASC" ? (
                    <i className="fas fa-arrow-up"></i>
                  ) : (
                    <i className="fas fa-arrow-down"></i>
                  )}
                </strong>
                <FormattedMessage id="OrderID" />
              </li>
              <li
                onClick={() =>
                  props.handleSort({
                    value: props.sort.descripcion,
                    name: "descripcion",
                  })
                }
              >
                <strong>
                  {props.sort.descripcion === "ASC" ? (
                    <i className="fas fa-arrow-up"></i>
                  ) : (
                    <i className="fas fa-arrow-down"></i>
                  )}
                </strong>
                <FormattedMessage id="Description" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyButton;
