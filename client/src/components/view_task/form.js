import React from "react";

import { FormattedMessage } from "react-intl";

const Form = (props) => {
  return (
    <div className="module-view">
      <div className="module-view--title">
        <div>
          <h3>
            <FormattedMessage id="FormAndRegistration" />
          </h3>
        </div>
      </div>
      <div className="module-view--box">
        <h5>
          <FormattedMessage id="KindOfLoad" />
        </h5>
        {props.data.encabezado.ingresa_tipo_de_carga &&
          props.data.detalle.tipo_carga_seleccionadas.map((item) => (
            <h6 key={item.id}>{item.tipo_carga.nombre}</h6>
          ))}
        {!props.data.encabezado.ingresa_tipo_de_carga && <h6>N/A</h6>}
      </div>
      <div className="module-view--box">
        <h5>
          <FormattedMessage id="LoadStatus" />
        </h5>
        {props.data.encabezado.ingresa_estado_carga &&
          props.data.detalle.estado_carga_seleccionados.map((item) => (
            <h6 key={item.id}>{item.estado_carga.nombre}</h6>
          ))}
        {!props.data.encabezado.ingresa_estado_carga && <h6>N/A</h6>}
      </div>
      <div className="module-view--box">
        <h5>
          <FormattedMessage id="KindOfWeather" />
        </h5>
        {props.data.encabezado.ingresa_condicion_climatica &&
          props.data.detalle.climatica_seleccionadas.map((item) => (
            <h6 key={item.id}>{item.condicion_climatica.nombre}</h6>
          ))}
        {!props.data.encabezado.ingresa_condicion_climatica && <h6>N/A</h6>}
      </div>
      <div className="module-view--box">
        <h5>
          <FormattedMessage id="ContainerNumber" />
        </h5>
        <h6>{props.data.encabezado.txt_numero_contenedor}</h6>
      </div>
      <div className="module-view--box">
        <h5>
          <FormattedMessage id="FileNumber" />
        </h5>
        <h6>{props.data.encabezado.txt_numero_documento}</h6>
      </div>
      <div className="module-view--box">
        <h5>
          <FormattedMessage id="Observations" />
        </h5>
        <h6>{props.data.encabezado.txt_observacion}</h6>
      </div>
    </div>
  );
};

export default Form;
