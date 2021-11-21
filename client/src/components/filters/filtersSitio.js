import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilterSitio } from "../../actions/filters";
import { FormattedMessage } from "react-intl";

/* Component */
import { Form } from "react-bootstrap";

const Sitio = (props) => {
  const state = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  useEffect(() => {
    const callsAPI = async () => {
      if (state.id_client !== "") {
        dispatch(getFilterSitio({ id_cliente: state.id_client }));
      }
    };
    callsAPI();
  }, [dispatch, state.id_client]);

  return (
    <div className="module--form__box">
      <Form.Group controlId="code">
        <Form.Label>
          <FormattedMessage id="Address" />
          <strong onClick={() => props.handleModalAddress()}>
            <FormattedMessage id="NewSitio" />
          </strong>
          {props.sitioIdError && (
            <span className="text-error">
              * ( <FormattedMessage id={props.sitioIdError} />)
            </span>
          )}
        </Form.Label>
        <Form.Control
          as="select"
          value={props.sitioId}
          onChange={props.handleChange}
          name="sitio_id"
          requeried="true"
          data-number="ok"
        >
          <FormattedMessage id="Selected">
            {(message) => <option value="">{message}</option>}
          </FormattedMessage>
          {state.statusFiltersSitio === 200 &&
            state.dataFiltersSitio.datos.map((item) => (
              <option
                key={item.id}
                value={item.id}
                data-start={item.direccion.hora_entrada}
                data-end={item.direccion.hora_salida}
              >
                {`${item.nombre} ${item.direccion.hora_entrada} - ${item.direccion.hora_salida}`}
              </option>
            ))}
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default Sitio;
