import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHome } from "../../actions/home";
import { FormattedMessage } from "react-intl";

/* Component */
import { Form } from "react-bootstrap";

const Contracts = (props) => {
  const state = useSelector((state) => state.home);
  const dispatch = useDispatch();
  useEffect(() => {
    const callsAPI = async () => {
      dispatch(getHome({}));
    };
    callsAPI();
  }, [dispatch]);

  return (
    <div className="module--form__box">
      <Form.Group controlId="code">
        <Form.Label>
          <FormattedMessage id="Companies" />
        </Form.Label>
        <Form.Control
          as="select"
          value={props.marcaId}
          onChange={props.handleChange}
          name="marca_id"
          requeried="true"
          data-number="ok"
        >
          <FormattedMessage id="Selected">
            {(message) => <option value="">{message}</option>}
          </FormattedMessage>
          {state.status === 200 &&
            state.data.datos.map((item) => (
              <option key={item.marca.id} value={item.marca.id}>
                {item.marca.nombre}
              </option>
            ))}
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default Contracts;
