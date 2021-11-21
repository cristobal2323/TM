import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilterProduct } from "../../actions/filters";
import { FormattedMessage } from "react-intl";
import { Button } from "react-bootstrap";

/* Component */
import { Form } from "react-bootstrap";

const Product = (props) => {
  const state = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  useEffect(() => {
    const callsAPI = async () => {
      if (state.id_product !== "") {
        dispatch(getFilterProduct({ id_product: state.id_product }));
      }
    };
    callsAPI();
  }, [dispatch, state.id_product]);

  return (
    <div className="module--form__box">
      <Form.Group>
        <Form.Label>
          <FormattedMessage id="Product" />
          {props.productError && (
            <span className="text-error">
              {" "}
              * ( <FormattedMessage id={props.productError} />)
            </span>
          )}
        </Form.Label>
        <div className="flex">
          <Button
            variant="info"
            type="button"
            className="right"
            onClick={() => props.handleRemoveProduct(props.num)}
          >
            -
          </Button>
          <Form.Control
            as="select"
            value={props.productId}
            onChange={(event) => props.handleChange(event, props.num)}
            name="product_id"
            requeried="true"
            data-number="ok"
          >
            <FormattedMessage id="Selected">
              {(message) => (
                <option value="" data-nameproduct="" data-idproduct="">
                  {message}
                </option>
              )}
            </FormattedMessage>
            {state.statusFiltersProduct === 200 &&
              state.dataFiltersProduct.datos.map((item) => {
                const index = props.products.findIndex(
                  (item) => item.name === "1"
                );

                let categoria = item.categoria.id;
                const palletJacekt = "5";

                let obj = props.products.find((o) => {
                  if (
                    o.name.toString() === item.categoria.id.toString() &&
                    item.categoria.id.toString() === "1" &&
                    index >= 0 &&
                    item.tipo_producto.id.toString() !== palletJacekt
                  ) {
                    return true;
                  }
                  return o.product_id.toString() === item.id.toString();
                });

                if (item.tipo_producto.id.toString() === palletJacekt) {
                  categoria = "2";
                }
                return (
                  <option
                    disabled={obj ? true : false}
                    key={item.id}
                    value={item.id}
                    data-nameproduct={categoria}
                    data-idproduct={item.tipo_producto.id}
                  >
                    {item.nombre}
                  </option>
                );
              })}
          </Form.Control>
        </div>
      </Form.Group>
    </div>
  );
};

export default Product;
