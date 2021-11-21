import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilterInstalador } from "../../actions/filters";
import { FormattedMessage } from "react-intl";

/* Component */
import { Form } from "react-bootstrap";

const Instalador = (props) => {
  const state = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  useEffect(() => {
    const callsAPI = async () => {
      dispatch(getFilterInstalador({}));
    };
    callsAPI();
  }, [dispatch]);
  return (
    <div className="module--form__box">
      <Form.Group>
        <Form.Label>
          <FormattedMessage id="Installer" />
          {props.instaladorIdError && (
            <span className="text-error">
              {" "}
              * ( <FormattedMessage id={props.instaladorIdError} />)
            </span>
          )}
        </Form.Label>
        <Form.Control
          as="select"
          value={props.instaladorId}
          onChange={props.handleChange}
          name="instalador_id"
          requeried="true"
          data-number="ok"
        >
          <FormattedMessage id="Selected">
            {(message) => <option value="">{message}</option>}
          </FormattedMessage>
          {state.statusFiltersInstalador === 200 &&
            state.dataFiltersInstalador.datos.map((item) => (
              <option key={item.id} value={item.id}>
                {`${item.names} ${item.last_names}`}
              </option>
            ))}
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default Instalador;
