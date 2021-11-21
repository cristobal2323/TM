import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilterHours } from "../../actions/filters";
import { FormattedMessage } from "react-intl";

/* Component */
import { Form } from "react-bootstrap";

const HoursStart = (props) => {
  const state = useSelector((state) => state.filters);

  const dispatch = useDispatch();
  useEffect(() => {
    const callsAPI = async () => {
      dispatch(getFilterHours({}));
    };
    callsAPI();
  }, [dispatch]);
  return (
    <div className="module--form__box">
      <Form.Group>
        <Form.Label>
          <FormattedMessage id="StartTime" />
          {props.hoursStartIdError && (
            <span className="text-error">
              {" "}
              * ( <FormattedMessage id={props.hoursStartIdError} />)
            </span>
          )}
        </Form.Label>
        <Form.Control
          as="select"
          value={props.hoursStartId}
          onChange={props.handleChange}
          name="hours_start_id"
          requeried="true"
          data-number="ok"
        >
          {state.statusFiltersHours === 200 &&
            state.dataFiltersHours.datos.lista_inicios.map((item) => (
              <option data-start={item.comienza} key={item.id} value={item.id}>
                {item.comienza}
              </option>
            ))}
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default HoursStart;
