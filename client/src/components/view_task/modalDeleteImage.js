import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

import { useSelector, useDispatch } from "react-redux";
import { deleteTaskImage, resetDeleteTaskImage } from "../../actions/view_task";
import { getTaskId } from "../../actions/update_task";

function ModalDelete(props) {
  const state = useSelector((state) => state.viewTask);
  const dispatch = useDispatch();

  const postChange = (event) => {
    event.preventDefault();
    event.persist();

    const obj = {
      timestamp: props.timestamp,
      ejecucion_id: props.dataTaskId.id,
      blob_id: props.dataDelete.idImage,
    };
    dispatch(deleteTaskImage(obj));
  };

  const closeModal = () => {
    props.setModal(false);
    dispatch(getTaskId({ id: props.idTarea, loading: false }));
    dispatch(resetDeleteTaskImage());
  };

  return (
    <>
      <Modal
        onHide={() => closeModal(false)}
        show={props.modal}
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <FormattedMessage id="DeleteImage" />
          </Modal.Title>
        </Modal.Header>

        {state.statusDeleteTaskImage === 0 && (
          <Modal.Body>
            <p className="modal_down">
              <FormattedMessage id="AreYouSure" />
            </p>
          </Modal.Body>
        )}

        {state.statusDeleteTaskImage === 200 &&
          state.dataDeleteTaskImage.ejecucion.estado && (
            <Modal.Body>
              <p className="modal_down">
                <FormattedMessage id="TheImageWasSuccessfullyDeleted" />
              </p>
              <h4 className="modal_icon">
                <i className="fas fa-smile"></i>
              </h4>
            </Modal.Body>
          )}

        {state.statusDeleteTaskImage === 200 &&
          !state.dataDeleteTaskImage.ejecucion.estado && (
            <Modal.Body>
              <p className="modal_down">
                <FormattedMessage id="TheImageWasNotDeleted" />
              </p>
              <h4 className="modal_icon">
                <i className="fas fa-sad-tear"></i>
              </h4>
            </Modal.Body>
          )}

        {state.statusDeleteTaskImage === 0 && (
          <Modal.Footer>
            <Button
              disabled={state.loadingDeleteTaskImage}
              variant="main"
              type="submit"
              onClick={postChange}
            >
              {state.loadingDeleteTaskImage ? (
                <FormattedMessage id="Loading" />
              ) : (
                <FormattedMessage id="Accept" />
              )}
            </Button>
          </Modal.Footer>
        )}

        {state.statusDeleteTaskImage === 200 && (
          <Modal.Footer>
            <Button
              disabled={state.loadingDeleteTaskImage}
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

export default ModalDelete;
