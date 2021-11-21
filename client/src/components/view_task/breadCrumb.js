import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
//import { FormattedMessage } from "react-intl";

const DataMain = (props) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item onClick={() => props.history.goBack()}>
        <i className="fas fa-arrow-left"></i>{" "}
        <FormattedMessage id="Instalation" />
      </Breadcrumb.Item>

      <Breadcrumb.Item active>
        <FormattedMessage id="TaskDetail" />
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default DataMain;
