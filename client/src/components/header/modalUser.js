import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

function ModalUser(props) {
  let email = localStorage.getItem("names");

  return (
    <>
      <Modal
        onHide={() => props.setModalUser(false)}
        show={props.modal}
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <FormattedMessage id={"User"} />
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="modal_down">
            <strong>
              <FormattedMessage id="User" />:{" "}
            </strong>
            {email}
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="info"
            type="submit"
            onClick={() => props.setModalUser(false)}
          >
            <FormattedMessage id="Ok" />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalUser;
