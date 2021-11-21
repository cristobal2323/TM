import React from "react";
import PropTypes from "prop-types";
import { withRouter, Switch, Route } from "react-router-dom";

import Login from "../login";
import Dashboard from "../dashboard";

const Main = ({ location }) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="*" component={Dashboard} />
      </Switch>
    </div>
  );
};

Main.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(Main);
