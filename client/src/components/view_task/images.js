import React, { useState } from "react";
import Modal from "./modalViewImage";
import Config from "../../actions/config";

import { FormattedMessage } from "react-intl";

const Images = (props) => {
  const [path, setPath] = useState(false);
  const [modal, setModal] = useState(false);
  const arr = [];

  const showImage = (obj) => {
    setModal(obj.modal);
    setPath({ path: obj.path, name: obj.name });
  };

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
      <Modal path={path} modal={modal} setModal={setModal} />
    </div>
  );
};

export default Images;
