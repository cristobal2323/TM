import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getClient } from "../../actions/clients";
import { FormattedMessage } from "react-intl";

/* Component */
import { Form } from "react-bootstrap";

const Contracts = (props) => {
  const state = useSelector((state) => state.clients);
  const dispatch = useDispatch();
  useEffect(() => {
    const callsAPI = async () => {
      dispatch(getClient({ loading: true, version: 1 }));
    };
    callsAPI();
  }, [dispatch]);

  return (
    <div className="module--form__box">
      <Form.Group>
        <Form.Label>
          <FormattedMessage id="Client" />
          {props.clienteIdError && (
            <span className="text-error">
              {" "}
              * ( <FormattedMessage id={props.clienteIdError} />)
            </span>
          )}
        </Form.Label>
        <Form.Control
          as="select"
          value={props.clienteId}
          onChange={props.handleChange}
          name="cliente_id"
          requeried="true"
          data-number="ok"
        >
          <FormattedMessage id="Selected">
            {(message) => <option value="">{message}</option>}
          </FormattedMessage>
          {state.statusClient === 200 &&
            state.dataClient.datos.map((item) => (
              <option key={item.id} value={item.id}>
                {item.nombre}
              </option>
            ))}
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default Contracts;
