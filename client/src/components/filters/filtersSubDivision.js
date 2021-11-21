import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSubDivision } from "../../actions/clients";
import { FormattedMessage } from "react-intl";

/* Component */
import { Form } from "react-bootstrap";

const SubDivision = (props) => {
  const state = useSelector((state) => state.clients);
  const dispatch = useDispatch();
  useEffect(() => {
    const callsAPI = async () => {
      if (state.id_division !== "") {
        dispatch(getSubDivision({ division_id: state.id_division }));
      }
    };
    callsAPI();
  }, [dispatch, state.id_division]);

  return (
    <div className="module--form__box">
      <Form.Group>
        <Form.Label>
          {props.label}
          {props.subDivisionIdError && (
            <span className="text-error">
              {" "}
              * ( <FormattedMessage id={props.subDivisionIdError} />)
            </span>
          )}
        </Form.Label>
        <Form.Control
          as="select"
          value={props.subDivisionId}
          onChange={props.handleChange}
          name="subdivision_id"
          requeried="true"
          data-number="ok"
        >
          <FormattedMessage id="Selected">
            {(message) => <option value="">{message}</option>}
          </FormattedMessage>
          {state.statusSubDivision === 200 &&
            state.dataSubDivision.datos.map((item) => (
              <option key={item.id} value={item.id}>
                {item.nombre}
              </option>
            ))}
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default SubDivision;
