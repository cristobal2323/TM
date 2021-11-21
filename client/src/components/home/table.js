import React, { useState } from "react";
import { Table } from "react-bootstrap";

import Modal from "./modalEdit";

const MyTable = (props) => {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState({});
  return (
    <div className="box-table">
      <Modal
        search={props.search}
        data={data}
        modal={modal}
        setModal={setModal}
      />
      <Table striped hover>
        <thead>
          <tr>
            <th>N</th>
            <th>Name</th>
            <th>Created by</th>
            <th className="center">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.data.data.map((item, i) => {
            return (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.user.displayName}</td>
                <td className="center">
                  <span href="#ver" className="table-button--normal buttons">
                    <i className="fas fa-ellipsis-h"></i>
                    <div className="table-button--normal--option">
                      <ul>
                        <li
                          onClick={() => {
                            setModal(true);
                            setData(item);
                          }}
                        >
                          Edit
                        </li>
                      </ul>
                    </div>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default MyTable;
