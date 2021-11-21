import React from "react";
import { Modal } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import { addTaskImage, resetAddTaskImage } from "../../actions/view_task";
import { getTaskId } from "../../actions/update_task";

function ModalAddImage(props) {
  const state = useSelector((state) => state.viewTask);
  const dispatch = useDispatch();

  const postChange = (event) => {
    event.preventDefault();
    event.persist();

    const obj = {
      timestamp: props.timestamp,
      ejecucion_id: props.dataTask.id,
      tipo_foto: props.text,
      foto: props.image,
    };
    if (props.image !== "" && props.text !== "") {
      dispatch(addTaskImage(obj));
    } else {
      props.setAddTaskError("FieldsAreRequerided");
    }
  };

  const closeModal = () => {
    props.setModal(false);
    props.setImage("");
    props.setText("");
    dispatch(getTaskId({ id: props.idTarea, loading: false }));
    dispatch(resetAddTaskImage());
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
            <FormattedMessage id="AddImage" />
          </Modal.Title>
        </Modal.Header>
        {state.statusAddTaskImage === 0 && (
          <Modal.Body>
            <Form.Group controlId="code">
              <Form.Label>
                <FormattedMessage id="Companies" />
              </Form.Label>
              <Form.Control
                as="select"
                value={props.text}
                onChange={(event) => props.setText(event.target.value)}
                name="marca_id"
                requeried="true"
                data-number="ok"
              >
                <FormattedMessage id="Selected">
                  {(message) => <option value="">{message}</option>}
                </FormattedMessage>
                <FormattedMessage id="InsulatedProducts">
                  {(message) => (
                    <option value="producto_insulado_cerrado">{message}</option>
                  )}
                </FormattedMessage>
                <FormattedMessage id="ComplementaryProducts">
                  {(message) => (
                    <option value="producto_complementario">{message}</option>
                  )}
                </FormattedMessage>
                <FormattedMessage id="ContainerNumber">
                  {(message) => (
                    <option value="numero_contenedor">{message}</option>
                  )}
                </FormattedMessage>
                <FormattedMessage id="EmptyContainer">
                  {(message) => (
                    <option value="contenedor_vacio">{message}</option>
                  )}
                </FormattedMessage>
                <FormattedMessage id="HalfLoadContainer">
                  {(message) => (
                    <option value="contenedor_media_carga">{message}</option>
                  )}
                </FormattedMessage>
                <FormattedMessage id="FullContainer">
                  {(message) => (
                    <option value="contenedor_lleno">{message}</option>
                  )}
                </FormattedMessage>
                <FormattedMessage id="ContainerClosedDoor">
                  {(message) => (
                    <option value="contenedor_puerta_cerrada">{message}</option>
                  )}
                </FormattedMessage>
                <FormattedMessage id="Observations">
                  {(message) => <option value="observacion">{message}</option>}
                </FormattedMessage>
              </Form.Control>
              <Form.File className="top">
                <Form.File.Input
                  defaultValue={props.image}
                  onChange={props.handleChangeFile}
                  name="avatar1"
                />
              </Form.File>
            </Form.Group>
          </Modal.Body>
        )}

        {state.statusAddTaskImage === 200 &&
          state.dataAddTaskImage.ejecucion.estado && (
            <Modal.Body>
              <p className="modal_down">
                <FormattedMessage id="TheImageWasSuccessfullyAdded" />
              </p>
              <h4 className="modal_icon">
                <i className="fas fa-smile"></i>
              </h4>
            </Modal.Body>
          )}

        {state.statusAddTaskImage === 200 &&
          !state.dataAddTaskImage.ejecucion.estado && (
            <Modal.Body>
              <p className="modal_down">
                <FormattedMessage id="TheImageWasNotAdded" />
              </p>
              <h4 className="modal_icon">
                <i className="fas fa-sad-tear"></i>
              </h4>
            </Modal.Body>
          )}

        {state.statusAddTaskImage === 0 && (
          <Modal.Footer>
            {props.addTaskError && (
              <p className="text-error">
                <FormattedMessage id={props.addTaskError} />
              </p>
            )}
            <Button
              disabled={state.loadingAddTaskImage}
              variant="main"
              type="submit"
              onClick={postChange}
            >
              {state.loadingAddTaskImage ? (
                <FormattedMessage id="Loading" />
              ) : (
                <FormattedMessage id="Send" />
              )}
            </Button>
          </Modal.Footer>
        )}

        {state.statusAddTaskImage === 200 && (
          <Modal.Footer>
            <Button
              disabled={state.loadingAddTaskImage}
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

export default ModalAddImage;
