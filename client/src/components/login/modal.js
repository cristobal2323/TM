import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";

/* Actions  */
import {
  resetRegister,
  getLaboratory,
  postRegister,
} from "../../actions/login";

function ModalRegister(props) {
  /*  Use  states  */
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [laboratory, setLaboratory] = useState("");
  const [errorForm, setErrorForm] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLaboratory({}));
  }, [dispatch]);

  /*  User Select from redux  */
  const state = useSelector((state) => state.login);

  const reset = () => {
    setEmail("");
    setName("");
    setPass("");
    setLaboratory("");
    props.setModal(false);
    dispatch(resetRegister());
  };

  const registerUser = (event) => {
    if (email !== "" && pass !== "" && laboratory !== "" && name !== "") {
      event.preventDefault();
      dispatch(
        postRegister({
          email: email,
          displayName: name,
          password: pass,
          laboratory: laboratory,
        })
      );
    } else {
      setErrorForm(true);
    }
  };
  let error = "";

  if (errorForm) {
    error = <p className="text-error">Complete the fields</p>;
  }

  if (!state.dataRegister) {
    error = (
      <p className="text-error">
        <FormattedMessage id="ThereWasAnError" />, This mail already exists
      </p>
    );
  }

  if (state.statusRegister === 201) {
    return (
      <Modal
        show={props.modal}
        onHide={() => {
          reset();
        }}
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Register
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="modal_down">
            User was creted <i className="fas fa-smile"></i>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="main"
            type="submit"
            onClick={() => {
              reset();
            }}
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <Modal
        show={props.modal}
        onHide={() => reset()}
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Register
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="pass">
            <Form.Label>
              <FormattedMessage id="Name" /> (*)
            </Form.Label>
            <Form.Control
              value={name}
              className={name === "" && error ? "error" : ""}
              onChange={(e) => setName(e.target.value)}
              name={"pass"}
              autoComplete="current-password"
              type="test"
              placeholder={"Write your name"}
            />
          </Form.Group>
          <Form.Group controlId="pass">
            <Form.Label>
              <FormattedMessage id="Email" /> (*)
            </Form.Label>
            <FormattedMessage id="WriteYourEmail">
              {(msg) => (
                <Form.Control
                  value={email}
                  className={email === "" && error ? "error" : ""}
                  onChange={(e) => setEmail(e.target.value)}
                  name={"pass"}
                  autoComplete="current-password"
                  type="test"
                  placeholder={msg}
                />
              )}
            </FormattedMessage>
          </Form.Group>
          <Form.Group controlId="pass">
            <Form.Label>
              <FormattedMessage id="Password" /> (*)
            </Form.Label>
            <FormattedMessage id="WriteYourPass">
              {(msg) => (
                <Form.Control
                  value={pass}
                  className={pass === "" && error ? "error" : ""}
                  onChange={(e) => setPass(e.target.value)}
                  name={"pass"}
                  autoComplete="current-password"
                  type="test"
                  placeholder={msg}
                />
              )}
            </FormattedMessage>
          </Form.Group>
          <Form.Group>
            <Form.Label>Laboratory</Form.Label> (*)
            <Form.Control
              as="select"
              className={laboratory === "" && error ? "error" : ""}
              value={laboratory}
              onChange={(e) => setLaboratory(e.target.value)}
              name="laboratory"
              requeried="true"
              data-number="ok"
            >
              <FormattedMessage id="Selected">
                {(message) => <option value="">Select</option>}
              </FormattedMessage>
              {state.statusLaboratory === 200 &&
                state.dataLaboratory.data.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))}
            </Form.Control>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          {error}
          <Button
            disabled={state.loadingRegister}
            variant="main"
            type="submit"
            onClick={registerUser}
          >
            {state.loadingRegister ? (
              <FormattedMessage id="Loading" />
            ) : (
              <FormattedMessage id="Send" />
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalRegister;
