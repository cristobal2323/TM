import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "./modalAccept";
import Config from "../../actions/config";

import { FormattedMessage } from "react-intl";

const Sign = (props) => {
  const [data, setData] = useState(false);
  const [modal, setModal] = useState(false);

  const handleAccept = (obj) => {
    const revisada = {
      tarea_id: props.tarea.id,
      timestamp: props.tarea.timestamp,
      supervisor_id: parseInt(localStorage.getItem("supervisor"), 10),
      ejecucion_id: props.idEjecucion,
      fallida_id: props.idFallida,
    };

    setModal(obj.modal);
    setData(revisada);
  };

  return (
    <div className="module-view">
      <div className="module-view--title special">
        <div>
          <h3>
            <FormattedMessage id="Sign" />
          </h3>
        </div>
      </div>
      <div className="sign--button">
        <img
          className="sign"
          src={`${Config.api}${props.data.firma.archivo_imagen}`}
          alt="sign"
        />
        {props.estado !== 7 && (
          <div>
            <Button
              variant="main"
              type="submit"
              onClick={() => {
                handleAccept({ modal: true });
              }}
            >
              <FormattedMessage id="Accept" />
            </Button>
          </div>
        )}
      </div>
      <Modal data={data} modal={modal} setModal={setModal} />
    </div>
  );
};

export default Sign;
