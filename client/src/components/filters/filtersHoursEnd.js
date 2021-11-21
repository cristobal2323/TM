import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilterHours } from "../../actions/filters";
import { FormattedMessage } from "react-intl";

/* Component */
import { Form } from "react-bootstrap";

const HoursEnd = (props) => {
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
          <FormattedMessage id="EndTime" />
          {props.hoursEndIdError && (
            <span className="text-error">
              {" "}
              * ( <FormattedMessage id={props.hoursEndIdError} />)
            </span>
          )}
        </Form.Label>
        <Form.Control
          as="select"
          value={props.hoursEndId}
          onChange={props.handleChange}
          name="hours_end_id"
          requeried="true"
          data-number="ok"
        >
          {state.statusFiltersHours === 200 &&
            state.dataFiltersHours.datos.lista_terminos.map((item) => (
              <option data-end={item.termina} key={item.id} value={item.id}>
                {item.termina}
              </option>
            ))}
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default HoursEnd;
