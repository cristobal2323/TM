import React, { useState } from "react";

import { FormattedMessage } from "react-intl";
import Modal from "./modalOther";

const FormFail = (props) => {
  const [modal, setModal] = useState(false);
  return (
    <div className="module-view">
      <Modal
        idTarea={props.idTarea}
        timestamp={props.timestamp}
        modal={modal}
        idFails={props.data.id}
        setModal={setModal}
      />
      <div className="module-view--title">
        <div>
          <h3>
            <FormattedMessage id="FormAndRegistration" />
          </h3>
        </div>
      </div>
      <div className="module-view--box">
        <h5>
          <FormattedMessage id="Observations" />
        </h5>
        <h6>
          {props.data.razon.id !== 4 ? (
            props.data.razon.descripcion
          ) : (
            <FormattedMessage id="Other" />
          )}
        </h6>
      </div>
      {props.data.razon.id === 4 && (
        <div className="module-view--box">
          <h5>
            <FormattedMessage id="Other" />
          </h5>
          <h6>
            {props.data.glosa_otro === "" ? "N/A" : props.data.glosa_otro}
            <strong onClick={() => setModal(true)}>
              <FormattedMessage id="Update" />
            </strong>
          </h6>
        </div>
      )}
    </div>
  );
};

export default FormFail;
