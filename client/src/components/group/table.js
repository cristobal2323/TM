import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyTable = (props) => {
  return (
    <div className="box-table">
      <Table striped hover>
        <thead>
          <tr>
            <th>N</th>
            <th>Name</th>
            <th>Created by</th>
            <th>Stains</th>
            <th>State</th>
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
                <td>
                  {item.stains.map((st, e) => (
                    <p className="mini xl" key={e}>
                      {e + 1}: {st.name}
                    </p>
                  ))}
                </td>
                <td>
                  <span className={`state-${item.state ? 1 : 0}`}>
                    {item.state ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="center">
                  <span href="#ver" className="table-button--normal buttons">
                    <i className="fas fa-ellipsis-h"></i>
                    <div className="table-button--normal--option">
                      <ul>
                        <Link to={`/dashboard/update_group/${item._id}`}>
                          <li onClick={() => {}}>Edit</li>
                        </Link>
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
