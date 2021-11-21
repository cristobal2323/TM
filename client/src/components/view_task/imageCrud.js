import React, { useState } from "react";
import { Button } from "react-bootstrap";

import Config from "../../actions/config";
import Modal from "./modalViewImage";
import ModalAddImage from "./modalAddImage";
import ModalDeleteImage from "./modalDeleteImage";

import { FormattedMessage } from "react-intl";

const ImagesCrud = (props) => {
  /* Modal  */
  const [path, setPath] = useState(false);
  const [modal, setModal] = useState(false);

  /* Modal Image delete */
  const [modalDelete, setModalDelete] = useState(false);
  const [dataDelete, setDataDelete] = useState(false);

  /* Modal Image */
  const [modalImage, setModalImage] = useState(false);

  /* Text Image */
  const [text, setText] = useState("");

  /* My file image */
  const [image, setImage] = useState("");

  const [addTaskError, setAddTaskError] = useState(false);

  const toBase64 = async (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleChangeFile = async (event) => {
    event.persist();
    const filles = await toBase64(event.target.files[0]);

    const files1 = filles.split("base64,");

    setImage(files1[1]);
  };

  const showImage = (obj) => {
    setModal(obj.modal);
    setPath({ path: obj.path, name: obj.name });
  };

  const addImageModal = (obj) => {
    setModalImage(obj.modal);
  };

  const deleteImage = (obj) => {
    setModalDelete(obj.modal);
    setDataDelete({ idImage: obj.id });
  };

  const arr = [];
  props.data.detalle.foto_producto_insulado_cerrado.forEach((item) => {
    item.name = "InsulatedProducts";
    arr.push(item);
  });
  props.data.detalle.foto_producto_complementario.forEach((item) => {
    item.name = "ComplementaryProducts";
    arr.push(item);
  });
  props.data.detalle.foto_numero_contenedor.forEach((item) => {
    item.name = "ContainerNumber";
    arr.push(item);
  });
  props.data.detalle.foto_contenedor_vacio.forEach((item) => {
    item.name = "EmptyContainer";
    arr.push(item);
  });
  props.data.detalle.foto_contenedor_media_carga.forEach((item) => {
    item.name = "HalfLoadContainer";
    arr.push(item);
  });
  props.data.detalle.foto_contenedor_lleno.forEach((item) => {
    item.name = "FullContainer";
    arr.push(item);
  });
  props.data.detalle.foto_contenedor_puerta_cerrada.forEach((item) => {
    item.name = "ContainerClosedDoor";
    arr.push(item);
  });
  props.data.detalle.foto_observacion.forEach((item) => {
    item.name = "Observations";
    arr.push(item);
  });

  return (
    <div className="module-view">
      <div className="module--button--right">
        <Button
          variant="info"
          type="button"
          onClick={() => addImageModal({ modal: true })}
        >
          +
        </Button>
      </div>
      {arr.map((item) => {
        return (
          <div key={item.id} className="module-view--box-img">
            <div className="module-view--img-size">
              <div
                className="module-view--button-view"
                onClick={() => {
                  showImage({
                    modal: true,
                    name: item.name,
                    path: `${Config.api}${item.archivo_imagen}`,
                  });
                }}
              >
                <i className="fas fa-eye"></i>
              </div>
              <div
                className="module-view--button-delete"
                onClick={() => {
                  deleteImage({
                    modal: true,
                    id: item.id,
                  });
                }}
              >
                <i className="fas fa-trash-alt"></i>
              </div>
              <img
                alt={`img${item.id}`}
                src={`${Config.api}${item.archivo_imagen}`}
              />
              <div className="module-view--text-img">
                <h3>
                  <FormattedMessage id={item.name} />
                </h3>
              </div>
            </div>
          </div>
        );
      })}
      <ModalAddImage
        idTarea={props.idTarea}
        addTaskError={addTaskError}
        setAddTaskError={setAddTaskError}
        timestamp={props.timestamp}
        text={text}
        handleChangeFile={handleChangeFile}
        image={image}
        dataTask={props.data.encabezado}
        setImage={setImage}
        setText={setText}
        modal={modalImage}
        setModal={setModalImage}
      />
      <ModalDeleteImage
        idTarea={props.idTarea}
        timestamp={props.timestamp}
        dataTaskId={props.data.encabezado}
        modal={modalDelete}
        setModal={setModalDelete}
        dataDelete={dataDelete}
      />
      <Modal path={path} modal={modal} setModal={setModal} />
    </div>
  );
};

export default ImagesCrud;
