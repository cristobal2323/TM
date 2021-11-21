import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDivision } from "../../actions/clients";
import { FormattedMessage } from "react-intl";

/* Component */
import { Form } from "react-bootstrap";

const Division = (props) => {
  const state = useSelector((state) => state.clients);
  const dispatch = useDispatch();
  useEffect(() => {
    const callsAPI = async () => {
      dispatch(getDivision({}));
    };
    callsAPI();
  }, [dispatch]);

  return (
    <div className="module--form__box">
      <Form.Group>
        <Form.Label>
          {props.label}
          {props.divisionIdError && (
            <span className="text-error">
              {" "}
              * ( <FormattedMessage id={props.divisionIdError} />)
            </span>
          )}
        </Form.Label>
        <Form.Control
          as="select"
          value={props.divisionId}
          onChange={props.handleChange}
          name="division_id"
          requeried="true"
          data-number="ok"
        >
          <FormattedMessage id="Selected">
            {(message) => <option value="">{message}</option>}
          </FormattedMessage>
          {state.statusDivision === 200 &&
            state.dataDivision.datos.map((item) => (
              <option key={item.id} value={item.id}>
                {item.nombre}
              </option>
            ))}
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default Division;
