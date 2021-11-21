import React from "react";
import moment from "moment";
import { FormattedMessage } from "react-intl";

const DataMain = (props) => {
  return (
    <div className="module-view top">
      <div className="module-view--title">
        <div>
          <h3>Datos</h3>
        </div>
        <div>
          <h4>
            Order id: <strong>{props.data.correlativo}</strong>
          </h4>
        </div>
      </div>

      <div className="module-view--box">
        <h5>
          <FormattedMessage id="Client" />
        </h5>
        <h6>{props.data.cliente.nombre}</h6>
      </div>
      <div className="module-view--box">
        <h5>
          <FormattedMessage id="Supervisor" />
        </h5>
        <h6>{`${props.data.supervisor_id.names} ${props.data.supervisor_id.last_names}`}</h6>
      </div>
      <div className="module-view--box">
        <h5>
          <FormattedMessage id="Installer" />
        </h5>
        <h6>{`${props.dataAsigned.instalador.names} ${props.dataAsigned.instalador.last_names}`}</h6>
      </div>
      <div className="module-view--box">
        <h5>
          <FormattedMessage id="GuideOrInvoice" />
        </h5>
        <h6>{props.data.numero_guia_o_factura}</h6>
      </div>
      <div className="module-view--box">
        <h5>
          <FormattedMessage id="DateStart" />
        </h5>
        <h6>
          {moment(props.data.inicio.substr(0, 16), "YYYY-MM-DDTHH:mm").format(
            "DD-MM-YYYY  HH:mm"
          )}
        </h6>
      </div>
      <div className="module-view--box">
        <h5>
          <FormattedMessage id="DateEnd" />
        </h5>
        <h6>
          {moment(
            props.data.vencimiento.substr(0, 16),
            "YYYY-MM-DDTHH:mm"
          ).format("DD-MM-YYYY  HH:mm")}
        </h6>
      </div>
      <div className="module-view--box">
        <h5>Descripción</h5>
        <h6>{props.data.descripcion}</h6>
      </div>
      <div className="module-view--box">
        <h5>
          <FormattedMessage id="KindOfContainer" />
        </h5>
        <h6>{props.data.tipo_contenedor.nombre}</h6>
      </div>
      {props.revisada.id && (
        <div className="module-view--box">
          <h5>
            <FormattedMessage id="Revised" />
          </h5>
          <h6>{`${props.revisada.supervisor.names} ${props.revisada.supervisor.last_names}`}</h6>
        </div>
      )}
    </div>
  );
};

export default DataMain;
