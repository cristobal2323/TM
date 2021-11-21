import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

function ModalAssing(props) {
  return (
    <>
      <Modal
        onHide={() => props.setModal(false)}
        show={props.modal}
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id={props.path.name}>
            <FormattedMessage id={props.path.name} />
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="modal-image">
            <img alt={`img`} src={props.path.path} />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="info"
            type="submit"
            onClick={() => props.setModal(false)}
          >
            <FormattedMessage id="Ok" />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAssing;
