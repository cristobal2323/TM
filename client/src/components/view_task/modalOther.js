import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { useSelector, useDispatch } from "react-redux";

import { updateOther, resetUpdateOther } from "../../actions/view_task";
import { getTaskId } from "../../actions/update_task";

function ModalOther(props) {
  const [form, setForm] = useState({
    descripción: "",
    descripcion_error: false,
  });

  const state = useSelector((state) => state.viewTask);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.persist();
    setForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
      [`${event.target.name}_error`]: false,
    }));
  };

  const closeModal = () => {
    props.setModal(false);
    dispatch(getTaskId({ id: props.idTarea, loading: false }));
    dispatch(resetUpdateOther());
  };

  const postChange = (event) => {
    event.preventDefault();
    event.persist();

    const obj = {
      timestamp: props.timestamp,
      fallida_id: props.idFails,
      glosa_otro: form.descripcion,
    };

    dispatch(updateOther(obj));
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
            <FormattedMessage id="Other" />
          </Modal.Title>
        </Modal.Header>
        {state.statusUpdateOther === 0 && (
          <Modal.Body>
            <div className="module--form__box">
              <Form.Group>
                <Form.Label>
                  <FormattedMessage id="Description" />
                  {form.descripcion_error && (
                    <span className="text-error">
                      * ( <FormattedMessage id={form.descripcion_error} />)
                    </span>
                  )}
                </Form.Label>
                <Form.Control
                  defaultValue={form.descripcion}
                  onChange={handleChange}
                  type="text"
                  name="descripcion"
                />
              </Form.Group>
            </div>
          </Modal.Body>
        )}

        {state.statusUpdateOther === 200 &&
          state.dataUpdateOther.ejecucion.estado && (
            <Modal.Body>
              <p className="modal_down">
                <FormattedMessage id="TheFieldWasSuccessfullyUpdate" />
              </p>
              <h4 className="modal_icon">
                <i className="fas fa-smile"></i>
              </h4>
            </Modal.Body>
          )}

        {state.statusUpdateOther === 200 &&
          !state.dataUpdateOther.ejecucion.estado && (
            <Modal.Body>
              <p className="modal_down">
                <FormattedMessage id="TheFieldOtherWasNotUpdated" />
              </p>
              <h4 className="modal_icon">
                <i className="fas fa-sad-tear"></i>
              </h4>
            </Modal.Body>
          )}

        {state.statusUpdateOther === 0 && (
          <Modal.Footer>
            <Button
              disabled={state.loadingUpdateOther}
              variant="main"
              type="submit"
              onClick={postChange}
            >
              {state.loadingUpdateOther ? (
                <FormattedMessage id="Loading" />
              ) : (
                <FormattedMessage id="Accept" />
              )}
            </Button>
          </Modal.Footer>
        )}

        {state.statusUpdateOther === 200 && (
          <Modal.Footer>
            <Button
              disabled={state.loadingUpdateOther}
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

export default ModalOther;
