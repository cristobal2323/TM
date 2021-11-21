import React from "react";
import moment from "moment";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import Paginator from "./paginator";

const status = (id) => {
  let textStatus = "Initial";
  switch (id) {
    case 0:
      textStatus = "InProcess";
      break;
    case 1:
      textStatus = "FinishedExecuted";
      break;
    case 2:
      textStatus = "FinishedFailed";
      break;
    default:
      textStatus = "InProcess";
  }
  return textStatus;
};

const MyTable = (props) => {
  return (
    <div className="box-table">
      <Table striped hover>
        <thead>
          <tr>
            <th>
              <FormattedMessage id="OrderID" />
            </th>
            <th>
              <FormattedMessage id="Instalation" />
            </th>
            <th>
              <FormattedMessage id="Client" />
            </th>
            <th>
              <FormattedMessage id="Schedule" />
            </th>
            <th>
              <FormattedMessage id="DueDate" />
            </th>
            <th>
              <FormattedMessage id="Address" />
            </th>
            <th>
              <FormattedMessage id="Assigned" />
            </th>
            <th>
              <FormattedMessage id="Container" />
            </th>
            <th>
              <FormattedMessage id="Product" />
            </th>
            <th>
              <FormattedMessage id="Moderator" />
            </th>
            <th className="center">
              <FormattedMessage id="Status" />
            </th>
            <th className="center">
              <FormattedMessage id="Action" />
            </th>
          </tr>
        </thead>
        <tbody>
          {props.data.datos.map((item, i) => (
            <tr key={i}>
              <td>{item.correlativo}</td>
              <td>{item.descripcion}</td>
              <td>{item.cliente_nombre}</td>
              <td>
                {moment(
                  item.fecha_inicio.substr(0, 16),
                  "YYYY-MM-DDTHH:mm"
                ).format("DD-MM-YYYY  HH:mm")}
              </td>
              <td>
                {moment(
                  item.fecha_vencimiento.substr(0, 16),
                  "YYYY-MM-DDTHH:mm"
                ).format("DD-MM-YYYY  HH:mm")}
              </td>
              <td>
                <p>{item.sitio}</p>
              </td>
              <td>{item.asignado_username}</td>
              <td>{item.dimension_container.dimensiones}</td>
              <td>
                {item.productos.map((pr, i) => (
                  <p className="mini xl" key={i}>
                    {`${i + 1} - ${pr.nombre} ${pr.cantidad}`}
                  </p>
                ))}
              </td>
              <td>{item.supervisor_username}</td>
              <td>
                <span className={`state-${item.estado_actual_id.id}`}>
                  <FormattedMessage id={status(item.estado_actual_id.id)} />
                </span>
              </td>
              <td className="center">
                {!item.bloqueada ? (
                  <span href="#ver" className="table-button--normal buttons">
                    <i className="fas fa-ellipsis-h"></i>
                    <div className="table-button--normal--option">
                      <ul>
                        <li>
                          <Link
                            to={{
                              pathname: `/dashboard/view_task/${item.id}`,
                            }}
                          >
                            <FormattedMessage id="View" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </span>
                ) : (
                  <span className={`state-6`}>
                    <FormattedMessage id="InInstaller" />
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Paginator
        handlePaginator={props.handlePaginator}
        paginator={props.paginator}
        data={props.dataCount}
      />
    </div>
  );
};

export default MyTable;
