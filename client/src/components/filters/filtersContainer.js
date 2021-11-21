import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilterContainer } from "../../actions/filters";
import { FormattedMessage } from "react-intl";

/* Component */
import { Form } from "react-bootstrap";

const Container = (props) => {
  const state = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  useEffect(() => {
    const callsAPI = async () => {
      dispatch(getFilterContainer({}));
    };
    callsAPI();
  }, [dispatch]);
  return (
    <div className="module--form__box">
      <Form.Group>
        <Form.Label>
          <FormattedMessage id="Container" />
          {props.containerIdError && (
            <span className="text-error">
              {" "}
              * ( <FormattedMessage id={props.containerIdError} />)
            </span>
          )}
        </Form.Label>
        <Form.Control
          as="select"
          value={props.containerId}
          onChange={props.handleChange}
          name="container_id"
          requeried="true"
          data-number="ok"
        >
          <FormattedMessage id="Selected">
            {(message) => <option value="">{message}</option>}
          </FormattedMessage>
          {state.statusFiltersContainer === 200 &&
            state.dataFiltersContainer.datos.map((item) => (
              <option key={item.id} value={item.id}>
                {item.nombre}
              </option>
            ))}
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default Container;
