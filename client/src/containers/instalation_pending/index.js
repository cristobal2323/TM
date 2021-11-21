import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getTask,
  resetTask,
  getTaskCount,
  resetTaskCount,
} from "../../actions/instalation_pending";
import moment from "moment";
/* Components */
import Modal from "../../components/common/modal";
import Button from "../../components/instalation_pending/button";
import Table from "../../components/instalation_pending/table";
import Header from "../../components/instalation_pending/header";
import Config from "../../actions/config";

const InstalationPending = (props) => {
  const state = useSelector((state) => state.instalationPending);
  const dispatch = useDispatch();

  const [paginator, setPaginator] = useState({
    start: 1,
    end: Config.nxpage,
    main: 1,
    blockStart: 1,
    blockEnd: 10,
    loading: true,
  });
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState({
    vencimiento: "ASC",
    instalador_username: "ASC",
    supervisor_username: "ASC",
    correlativo: "ASC",
    descripcion: "ASC",
  });

  useEffect(() => {
    const callsAPI = async () => {
      dispatch(
        getTask({
          status: "pending",
          loading: true,
          start: 1,
          end: Config.nxpage,
          dateStart: "null",
          dateEnd: "null",
          patron: "",
          sort: {
            vencimiento: "ASC",
            instalador_username: "ASC",
            supervisor_username: "ASC",
            correlativo: "ASC",
            descripcion: "ASC",
          },
        })
      );

      dispatch(
        getTaskCount({
          status: "pending",
          loading: true,
          start: 1,
          end: Config.nxpage,
          dateStart: "null",
          dateEnd: "null",
          patron: "",
        })
      );
    };
    callsAPI();
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(resetTask());
      dispatch(resetTaskCount());
    };
  }, [dispatch]);

  const handlePaginator = async (event) => {
    const num = parseInt(event.currentTarget.dataset.num, 10);

    let valorPaginator = Config.nxpage * parseInt(num, 10);

    let start = valorPaginator + 1 - Config.nxpage;
    let end = valorPaginator;

    let blockStart = paginator.blockStart;
    let blockEnd = paginator.blockEnd;

    if (blockStart === num) {
      if (num > 5) {
        blockStart = paginator.blockStart - 5;
        blockEnd = paginator.blockEnd - 5;
      }
    }

    if (blockEnd === num) {
      blockStart = paginator.blockStart + 5;
      blockEnd = paginator.blockEnd + 5;
    }

    const obj = {
      main: num,
      start,
      end,
      blockStart,
      blockEnd,
      loading: false,
    };

    dispatch(
      getTask({
        status: "pending",
        loading: false,
        start,
        end,
        dateStart: startDate ? moment(startDate).format("DD-MM-YYYY") : "null",
        dateEnd: endDate ? moment(endDate).format("DD-MM-YYYY") : "null",
        patron: search,
        sort: sort,
      })
    );

    dispatch(
      getTaskCount({
        status: "pending",
        loading: false,
        start,
        end,
        dateStart: startDate ? moment(startDate).format("DD-MM-YYYY") : "null",
        dateEnd: endDate ? moment(endDate).format("DD-MM-YYYY") : "null",
        patron: search,
      })
    );

    setPaginator(obj);
  };

  const handleDateStart = async (date) => {
    setStartDate(date);

    let myStartDate = moment(date).format("DD-MM-YYYY");
    let myEndDate = moment(endDate).format("DD-MM-YYYY");
    if (date === null) {
      myStartDate = "null";
      myEndDate = "null";
    }

    if (endDate !== null) {
      setPaginator({
        start: 1,
        end: Config.nxpage,
        main: 1,
        blockStart: 1,
        blockEnd: 10,
        loading: true,
      });
      dispatch(
        getTask({
          status: "pending",
          loading: true,
          start: 1,
          end: Config.nxpage,
          dateStart: myStartDate,
          dateEnd: myEndDate,
          patron: search,
          sort: sort,
        })
      );

      dispatch(
        getTaskCount({
          status: "pending",
          loading: true,
          start: 1,
          end: Config.nxpage,
          dateStart: myStartDate,
          dateEnd: myEndDate,
          patron: search,
        })
      );
    }
  };
  const handleDateEnd = (date) => {
    setEndDate(date);

    let myStartDate = moment(startDate).format("DD-MM-YYYY");
    let myEndDate = moment(date).format("DD-MM-YYYY");
    if (date === null) {
      myStartDate = "null";
      myEndDate = "null";
    }

    if (startDate !== null) {
      setPaginator({
        start: 1,
        end: Config.nxpage,
        main: 1,
        blockStart: 1,
        blockEnd: 10,
        loading: true,
      });
      dispatch(
        getTask({
          status: "pending",
          loading: true,
          start: 1,
          end: Config.nxpage,
          dateStart: myStartDate,
          dateEnd: myEndDate,
          patron: search,
          sort: sort,
        })
      );

      dispatch(
        getTaskCount({
          status: "pending",
          loading: true,
          start: 1,
          end: Config.nxpage,
          dateStart: myStartDate,
          dateEnd: myEndDate,
          patron: search,
        })
      );
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    event.persist();
    setSearch(event.target.value);

    setPaginator({
      start: 1,
      end: Config.nxpage,
      main: 1,
      blockStart: 1,
      blockEnd: 10,
      loading: true,
    });

    dispatch(
      getTask({
        status: "pending",
        loading: true,
        start: 1,
        end: Config.nxpage,
        dateStart: startDate ? moment(startDate).format("DD-MM-YYYY") : "null",
        dateEnd: endDate ? moment(endDate).format("DD-MM-YYYY") : "null",
        patron: event.target.value,
        sort: sort,
      })
    );

    dispatch(
      getTaskCount({
        status: "pending",
        loading: true,
        start: 1,
        end: Config.nxpage,
        dateStart: startDate ? moment(startDate).format("DD-MM-YYYY") : "null",
        dateEnd: endDate ? moment(endDate).format("DD-MM-YYYY") : "null",
        patron: event.target.value,
      })
    );
  };

  const handleSort = async (obj) => {
    const myObj = sort;
    setSort((prev) => ({
      ...prev,
      [obj.name]: obj.value === "ASC" ? "DESC" : "ASC",
    }));
    myObj[obj.name] = obj.value === "ASC" ? "DESC" : "ASC";

    dispatch(
      getTask({
        status: "pending",
        loading: false,
        start: 1,
        end: Config.nxpage,
        dateStart: startDate ? moment(startDate).format("DD-MM-YYYY") : "null",
        dateEnd: endDate ? moment(endDate).format("DD-MM-YYYY") : "null",
        patron: search,
        sort: myObj,
      })
    );
  };

  if (
    state.status === 401 ||
    state.status === 501 ||
    state.statusCount === 401 ||
    state.statusCount === 501
  ) {
    return <Modal history={props.history} state={true} />;
  }

  if (state.loading || state.loadingCount) {
    return (
      <div className="module--table">
        <Header
          search={search}
          handleSearch={handleSearch}
          startDate={startDate}
          handleDateStart={handleDateStart}
          endDate={endDate}
          handleDateEnd={handleDateEnd}
        />
        <div className="module--loading">
          <i className="fas fa-cog fa-spin"></i>
        </div>
      </div>
    );
  }

  return (
    <div className="module--table">
      <Header
        search={search}
        handleSearch={handleSearch}
        startDate={startDate}
        handleDateStart={handleDateStart}
        endDate={endDate}
        handleDateEnd={handleDateEnd}
      />
      <Button handleSort={handleSort} sort={sort} />
      <Table
        patron={search}
        sort={sort}
        startDate={startDate}
        endDate={endDate}
        handlePaginator={handlePaginator}
        paginator={paginator}
        data={state.data}
        dataCount={state.dataCount}
      />
    </div>
  );
};

export default InstalationPending;
