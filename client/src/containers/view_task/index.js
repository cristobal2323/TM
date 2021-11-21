import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTaskId } from "../../actions/update_task";
import { FormattedMessage } from "react-intl";

/* Components */
import DataMain from "../../components/view_task/dataMain";
import Bread from "../../components/view_task/breadCrumb";
import Products from "../../components/view_task/productos";
import ProductsFails from "../../components/view_task/pruductosFails";
import Form from "../../components/view_task/form";
import FormFail from "../../components/view_task/formFail";
import Images from "../../components/view_task/images";
import MapaLe from "../../components/view_task/mapa";
import Sign from "../../components/view_task/sign";
import ModalTimedOut from "../../components/common/modal";

const ViewTask = (props) => {
  const state = useSelector((state) => state.updateTask);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTaskId({ id: props.match.params.id, loading: true }));
  }, [dispatch, props]);

  if (state.loadingTaskId) {
    return (
      <div className="module--loading">
        <i className="fas fa-cog fa-spin"></i>
      </div>
    );
  }

  if (state.statusTaskId === 401 || state.statusTaskId === 501) {
    return <ModalTimedOut history={props.history} state={true} />;
  }

  if (!state.dataTaskId.ejecucion.estado) {
    return (
      <div className="module-message">
        <h1>
          <FormattedMessage id="YouCannotViewTheTask" />
        </h1>
      </div>
    );
  }

  return (
    <div>
      <Bread history={props.history} />

      <DataMain
        dataAsigned={state.dataTaskId.datos.asignada}
        data={state.dataTaskId.datos.tarea}
        revisada={state.dataTaskId.datos.revisada}
      />
      {state.dataTaskId.datos.ultimo_tarea_estado.id === 0 && (
        <ProductsFails data={state.dataTaskId.datos.tarea.productos} />
      )}

      {state.dataTaskId.datos.ultimo_tarea_estado.id === 1 && (
        <React.Fragment>
          <Products
            data={
              state.dataTaskId.datos.datos_ejecucion.detalle
                .productos_instalados
            }
          />
          <Form data={state.dataTaskId.datos.datos_ejecucion} />
          <Images data={state.dataTaskId.datos.datos_ejecucion} />
          <section className="mapa-check">
            <div className="mapa-check--box">
              <h6>
                <FormattedMessage id="Accepted" />
              </h6>
              <MapaLe
                longitud={state.dataTaskId.datos.aceptada.longitud}
                latitud={state.dataTaskId.datos.aceptada.latitud}
              />
            </div>
            <div className="mapa-check--box">
              <h6>
                <FormattedMessage id="Finished" />
              </h6>
              <MapaLe
                longitud={
                  state.dataTaskId.datos.datos_ejecucion.encabezado.longitud
                }
                latitud={
                  state.dataTaskId.datos.datos_ejecucion.encabezado.latitud
                }
              />
            </div>
          </section>
          <Sign
            estado={state.dataTaskId.datos.ultimo_tarea_estado.estado.id}
            tarea={state.dataTaskId.datos.tarea}
            idFallida={null}
            idEjecucion={state.dataTaskId.datos.datos_ejecucion.encabezado.id}
            data={state.dataTaskId.datos.datos_ejecucion.encabezado}
          />
        </React.Fragment>
      )}
      {state.dataTaskId.datos.ultimo_tarea_estado.id === 2 && (
        <React.Fragment>
          <ProductsFails data={state.dataTaskId.datos.tarea.productos} />
          <FormFail data={state.dataTaskId.datos.datos_fallida} />
          <section className="mapa-check">
            <div className="mapa-check--box">
              <h6>
                <FormattedMessage id="Accepted" />
              </h6>
              <MapaLe
                longitud={state.dataTaskId.datos.aceptada.longitud}
                latitud={state.dataTaskId.datos.aceptada.latitud}
              />
            </div>
            <div className="mapa-check--box">
              <h6>
                <FormattedMessage id="Finished" />
              </h6>
              <MapaLe
                longitud={state.dataTaskId.datos.datos_fallida.longitud}
                latitud={state.dataTaskId.datos.datos_fallida.latitud}
              />
            </div>
          </section>
          <Sign
            estado={state.dataTaskId.datos.ultimo_tarea_estado.estado.id}
            tarea={state.dataTaskId.datos.tarea}
            idEjecucion={null}
            idFallida={state.dataTaskId.datos.datos_fallida.id}
            data={state.dataTaskId.datos.datos_fallida}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default ViewTask;
