import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

/* Actions */
import { getStains, resetStains } from "../../actions/home";

/* Components */
import Modal from "../../components/common/modal";
import Button from "../../components/home/button";
import Table from "../../components/home/table";
import Header from "../../components/home/header";

/* Components */

const Home = (props) => {
  const [search, setSearch] = useState("");
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

  const handleSearch = async (event) => {
    setSearch(event.target.value);
    const data = JSON.parse(localStorage.getItem("laboratory"));
    dispatch(
      getStains({
        token: localStorage.getItem("id"),
        laboratoryId: data._id,
        name: event.target.value,
      })
    );
  };

  if (state.status === 501) {
    return <Modal history={props.history} state={true} />;
  }

  if (state.loading) {
    return (
      <div className="module--table">
        <Header search={search} handleSearch={handleSearch} />
        <div className="module--loading">
          <i className="fas fa-cog fa-spin"></i>
        </div>
      </div>
    );
  }

  return (
    <div className="module--table">
      <Header search={search} handleSearch={handleSearch} />
      <Button />
      <Table search={search} data={state.data} />
    </div>
  );
};

export default Home;
