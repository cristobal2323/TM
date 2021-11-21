import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInventory } from "../../actions//inventory";
import { FormattedMessage } from "react-intl";

/* Component */
import { Form } from "react-bootstrap";

const Contracts = (props) => {
  const state = useSelector((state) => state.inventory);
  const dispatch = useDispatch();
  useEffect(() => {
    const callsAPI = async () => {
      dispatch(getInventory({ loading: false }));
    };
    callsAPI();
  }, [dispatch]);

  return (
    <div className="module--form__box">
      <Form.Group controlId="code">
        <Form.Label>
          <FormattedMessage id="Warehouse" />
          {props.bodegaIdError && (
            <span className="text-error">
              {" "}
              * ( <FormattedMessage id={props.bodegaIdError} />)
            </span>
          )}
        </Form.Label>
        <Form.Control
          as="select"
          value={props.bodegaId}
          onChange={props.handleChange}
          name="bodega_id"
          requeried="true"
          data-number="ok"
        >
          <FormattedMessage id="Selected">
            {(message) => <option value="">{message}</option>}
          </FormattedMessage>
          {state.status === 200 &&
            state.data.datos.map((item) => (
              <option
                key={item.id}
                value={item.id}
                disabled={props.id === item.id ? true : false}
              >
                {`${item.instalador_id.username} ${item.instalador_id.last_names}`}
              </option>
            ))}
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default Contracts;
