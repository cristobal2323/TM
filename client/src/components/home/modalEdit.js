import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";

/* Actions  */
import { resetPutStain, putStain } from "../../actions/home";
import { getStains } from "../../actions/home";

function ModalEdit(props) {
  /*  Use  states  */

  const [name, setName] = useState(false);

  const [errorForm, setErrorForm] = useState(false);
  const dispatch = useDispatch();

  /*  User Select from redux  */
  const state = useSelector((state) => state.home);

  useEffect(() => {
    setName(props.data.name);
  }, [props.modal, props.data.name]);

  const reset = () => {
    setName("");
    props.setModal(false);
    dispatch(resetPutStain());
    if (state.statusUpdate === 200) {
      const data = JSON.parse(localStorage.getItem("laboratory"));
      dispatch(
        getStains({
          token: localStorage.getItem("id"),
          laboratoryId: data._id,
          name: props.search,
        })
      );
    }
  };

  const registerUser = (event) => {
    if (name !== "") {
      event.preventDefault();
      dispatch(
        putStain({
          token: localStorage.getItem("id"),
          name: name,
          _id: props.data._id,
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

  if (!state.dataUpdate) {
    error = <p className="text-error">There was a error</p>;
  }

  if (state.statusUpdate === 200) {
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
            Update
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
            Edit
          </Modal.Title>
        </Modal.Header>
        {props.modal && name && (
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
              />
            </Form.Group>
          </Modal.Body>
        )}

        <Modal.Footer>
          {error}
          <Button
            disabled={state.loadingUpdate}
            variant="main"
            type="submit"
            onClick={registerUser}
          >
            {state.loadingUpdate ? (
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

export default ModalEdit;
