import React from "react";

import { FormattedMessage } from "react-intl";

const Products = (props) => {
  return (
    <div className="module-view">
      <div className="module-view--title special">
        <div>
          <h3>
            <FormattedMessage id="Products" />
          </h3>
        </div>
      </div>
      {props.data.map((item) => {
        return (
          <div key={item.id} className="module-view--box">
            <h5>{item.categoria.glosa}</h5>
            <h6>{`${item.nombre} = ${item.cantidad}`}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
