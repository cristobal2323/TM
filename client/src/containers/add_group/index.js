import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

/* Components */
import Form from "../../components/add_group/form";

/* Actions */
import { getStains, resetStains } from "../../actions/home";

/* Components */
import Modal from "../../components/common/modal";

const AddGroup = (props) => {
  const state = useSelector((state) => state.home);
  const dispatch = useDispatch();

  /* Get data */
  useEffect(() => {
    const callsAPI = async () => {
      const data = JSON.parse(localStorage.getItem("laboratory"));
      dispatch(
        getStains({
          token: localStorage.getItem("id"),
          laboratoryId: data._id,
          name: "",
        })
      );
    };
    callsAPI();
  }, [dispatch]);

  /* Reset data */
  useEffect(() => {
    return () => {
      dispatch(resetStains());
    };
  }, [dispatch]);

  if (state.status === 501) {
    return <Modal history={props.history} state={true} />;
  }

  if (state.loading) {
    return (
      <div className="module--table">
        <div className="module--loading">
          <i className="fas fa-cog fa-spin"></i>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Form data={state.data} />
    </div>
  );
};

export default AddGroup;
