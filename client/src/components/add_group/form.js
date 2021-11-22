import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { postGroup, resetGroup } from "../../actions/add_group";

const FormComponent = (props) => {
  const [form, setForm] = useState({
    name: "",
  });

  const [error, setError] = useState(false);
  const [arrStain, setArrStain] = useState([]);

  const state = useSelector((state) => state.addGroup);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetGroup());
    };
  }, [dispatch]);

  const handleChange = (event) => {
    setError(false);
    event.persist();
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const addStain = (data) => {
    const arr = [...arrStain];
    arr.push(data);
    setArrStain(arr);
  };

  const deleteStain = (index) => {
    const arr = [...arrStain];
    arr.splice(index, 1);
    setArrStain(arr);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.persist();
    if (form.name !== "" && arrStain.length > 0) {
      const data = JSON.parse(localStorage.getItem("laboratory"));
      dispatch(
        postGroup({
          token: localStorage.getItem("id"),
          name: form.name,
          laboratory: data._id,
          state: true,
          stains: arrStain,
          user: localStorage.getItem("user"),
        })
      );
    } else {
      setError(true);
    }
  };

  const dataMemory = JSON.parse(localStorage.getItem("laboratory"));
  const rule = dataMemory.country.rules.duplicateGroup;

  const validation = (valor) => {
    const index = arrStain.findIndex((item) => item._id === valor._id);
    if (!rule) {
      if (index > -1) {
        return false;
      } else {
        return true;
      }
    }
    return true;
  };

  return (
    <Form onSubmit={handleSubmit}>
      <section className="module--form">
        <div className="module--form__box title">
          <h1>Add group</h1>
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
        <section className="module--stains">
          <div className="module--stains__box">
            {props.data.data.map((item) => {
              if (validation(item)) {
                return (
                  <div
                    onClick={() => {
                      addStain(item);
                    }}
                    key={item._id}
                  >
                    <article>{item.name}</article>
                    <article>
                      <i className="fas fa-arrow-right"></i>
                    </article>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
          <div className="module--stains__arrow">
            <i className="fas fa-arrow-right"></i>
          </div>
          <div className="module--stains__box">
            {arrStain.map((item, i) => {
              return (
                <div
                  onClick={() => {
                    deleteStain(i);
                  }}
                  key={i}
                >
                  <article>{item.name}</article>
                  <article>
                    <i className="fas fa-trash"></i>
                  </article>
                </div>
              );
            })}
          </div>
        </section>

        <div className="module--form__box full">
          {state.status === 200 && (
            <h3 className="message_success">The group was added</h3>
          )}
          {state.status === 401 && (
            <React.Fragment>
              <div>
                <h3 className="message_error">The group was not added</h3>
              </div>
            </React.Fragment>
          )}

          {error && (
            <React.Fragment>
              <div>
                <h3 className="message_error">Complete the field and stains</h3>
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
