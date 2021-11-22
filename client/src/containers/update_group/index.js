import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

/* Components */
import Form from "../../components/update_group/form";

/* Actions */
import { getStains, resetStains } from "../../actions/home";
import { getGroup, resetGroup } from "../../actions/update_group";

/* Components */
import Modal from "../../components/common/modal";

const UpdateGroup = (props) => {
  const state = useSelector((state) => state.home);
  const stateU = useSelector((state) => state.updateGroup);
  const dispatch = useDispatch();

  /* Get data */
  useEffect(() => {
    const callsAPI = async () => {
      const data = JSON.parse(localStorage.getItem("laboratory"));
      /* Stains */
      dispatch(
        getStains({
          token: localStorage.getItem("id"),
          laboratoryId: data._id,
          name: "",
        })
      );
      /* Group */
      dispatch(
        getGroup({
          token: localStorage.getItem("id"),
          _id: props.match.params.id,
        })
      );
    };
    callsAPI();
  }, [dispatch, props.match.params.id]);

  /* Reset data */
  useEffect(() => {
    return () => {
      dispatch(resetStains());
      dispatch(resetGroup());
    };
  }, [dispatch]);

  if (state.status === 501) {
    return <Modal history={props.history} state={true} />;
  }

  if (state.loading || stateU.loadingGroup) {
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
      <Form
        id={props.match.params.id}
        data={state.data}
        dataU={stateU.dataGroup}
      />
    </div>
  );
};

export default UpdateGroup;
