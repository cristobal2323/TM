import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { postStain, resetStain } from "../../actions/add_stain";

const FormComponent = (props) => {
  const [form, setForm] = useState({
    name: "",
  });

  const [error, setError] = useState(false);

  const state = useSelector((state) => state.addStain);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetStain());
    };
  }, [dispatch]);

  const handleChange = (event) => {
    setError(false);
    event.persist();
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.persist();
    if (form.name !== "") {
      const data = JSON.parse(localStorage.getItem("laboratory"));
      dispatch(
        postStain({
          token: localStorage.getItem("id"),
          name: form.name,
          laboratory: data._id,
          state: true,
          user: localStorage.getItem("user"),
        })
      );
    } else {
      setError(true);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <section className="module--form">
        <div className="module--form__box title">
          <h1>Add stain</h1>
        </div>
        <div className="module--form__box">
          <Form.Group controlId="code">
            <Form.Label>Name</Form.Label>
            <Form.Control
              defaultValue={form.name}
              onChange={handleChange}
              type="text"
              name="name"
            />
          </Form.Group>
        </div>

        <div className="module--form__box full">
          {state.status === 200 && (
            <h3 className="message_success">The stain was added</h3>
          )}
          {state.status === 401 && (
            <React.Fragment>
              <div>
                <h3 className="message_error">The stain was not added</h3>
              </div>
            </React.Fragment>
          )}

          {error && (
            <React.Fragment>
              <div>
                <h3 className="message_error">Complete the field</h3>
              </div>
            </React.Fragment>
          )}
          <Button disabled={props.loading} variant="main" type="submit">
            {state.loading ? "Loading" : "Add"}
          </Button>
        </div>
      </section>
    </Form>
  );
};
FormComponent.propTypes = {};

export default FormComponent;
