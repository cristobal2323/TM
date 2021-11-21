import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";

import { addTaskAccept, resetAddTaskAccept } from "../../actions/view_task";
import { getTaskId } from "../../actions/update_task";

function ModalAccept(props) {
  const state = useSelector((state) => state.viewTask);

  const dispatch = useDispatch();

  const postChange = (event) => {
    event.preventDefault();
    event.persist();

    dispatch(addTaskAccept(props.data));
  };

  const closeModal = () => {
    props.setModal(false);
    dispatch(getTaskId({ id: props.data.tarea_id, loading: true }));
    dispatch(resetAddTaskAccept());
  };

  return (
    <>
      <Modal
        onHide={() => closeModal()}
        show={props.modal}
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <FormattedMessage id={"Accept"} />
          </Modal.Title>
        </Modal.Header>

        {state.statusAddTaskAccept === 0 && (
          <Modal.Body>
            <p className="modal_down">
              <FormattedMessage id="AreYouSure" />
            </p>
            <h4 className="modal_icon">
              <i className="fas fa-info-circle"></i>
            </h4>
          </Modal.Body>
        )}
        {state.statusAddTaskAccept === 200 &&
          state.dataAddTaskAccept.ejecucion.estado && (
            <Modal.Body>
              <p className="modal_down">
                <FormattedMessage id="WasSuccessfullyAccepted" />
              </p>
              <h4 className="modal_icon">
                <i className="fas fa-smile"></i>
              </h4>
            </Modal.Body>
          )}
        {state.statusAddTaskAccept === 200 &&
          !state.dataAddTaskAccept.ejecucion.estado && (
            <Modal.Body>
              <p className="modal_down">
                <FormattedMessage id="WasNotAccepted" />
              </p>
              <h4 className="modal_icon">
                <i className="fas fa-sad-tear"></i>
              </h4>
            </Modal.Body>
          )}

        {state.statusAddTaskAccept === 0 && (
          <Modal.Footer>
            <Button
              disabled={state.loadingAddTaskAccept}
              variant="main"
              type="submit"
              onClick={postChange}
            >
              {state.loadingAddTaskAccept ? (
                <FormattedMessage id="Loading" />
              ) : (
                <FormattedMessage id="Send" />
              )}
            </Button>
          </Modal.Footer>
        )}
        {state.statusAddTaskAccept === 200 && (
          <Modal.Footer>
            <Button
              disabled={state.loadingAddTaskAccept}
              variant="info"
              type="submit"
              onClick={() => closeModal()}
            >
              <FormattedMessage id="Ok" />
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
}

export default ModalAccept;
