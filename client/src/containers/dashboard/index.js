import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { resetLogin } from "../../actions/login";
import { Route } from "react-router-dom";

import Home from "../home";
import AddStain from "../add_stain";
import InstalationPending from "../instalation_pending";

/* components */
import Nav from "../nav";
import Header from "../header";

import ModalUser from "../../components/header/modalUser";

import { IntlProvider } from "react-intl";

import messages_es from "../../translate/es";
import messages_en from "../../translate/en";

const messages = {
  es: messages_es,
  en: messages_en,
};

const Dashboard = ({ history, match }) => {
  const [modalUser, setModalUser] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    let auth = localStorage.getItem("auth");
    auth = auth === "true";
    if (!auth) {
      history.push("/");
      dispatch(resetLogin());
    }
  });

  const logOut = () => {
    dispatch(resetLogin());
    history.push("/");
  };

  const mobile = localStorage.getItem("mobile");
  let auth = localStorage.getItem("auth");
  auth = auth === "true";

  let language = navigator.language.split(/[-_]/)[0];

  if (
    localStorage.getItem("language") === "es" ||
    localStorage.getItem("language") === "en"
  ) {
    language = localStorage.getItem("language");
  } else if (language !== "es" && language !== "en") {
    language = "en";
  }

  if (!auth) {
    return (
      <IntlProvider locale={language} messages={messages[language]}>
        <section className="module--dashboard"></section>{" "}
      </IntlProvider>
    );
  }

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <section className="module--dashboard">
        <ModalUser modal={modalUser} setModalUser={setModalUser} />
        <Nav />
        <section
          id="dashboard"
          className={`module--dashboardContainer ${mobile}`}
        >
          <Header logOut={logOut} setModalUser={setModalUser} />
          <React.Fragment>
            <Route exact path={`${match.path}/home`} component={Home} />
            <Route
              exact
              path={`${match.path}/add_stain`}
              component={AddStain}
            />
          </React.Fragment>
        </section>
      </section>
    </IntlProvider>
  );
};

Dashboard.propTypes = {
  history: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Dashboard;
