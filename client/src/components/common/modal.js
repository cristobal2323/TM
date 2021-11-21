import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { resetLogin } from "../../actions/login";

function ModalLogOut(props) {
  const [show, setShow] = useState(props.state);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(resetLogin());
    props.history.push("/");
  };

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        onExit={logOut}
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Expired session
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Please reconnect</Modal.Body>
      </Modal>
    </>
  );
}

export default ModalLogOut;
