import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Home from "./containers/Home";
import { fetchRoleSuccess } from "./store/actions";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Layout from "./components/Layout";

const App = props => {
  const [result, setResult] = useState();
  useEffect(() => {
    props.fetchRoleSuccess();
  }, []);
  let routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div>
      <Layout>{routes}</Layout>
    </div>
  );
};

const mapStateToProps = state =>
  console.log("SATATE", state) || {
    getRole: state.app.roles
  };

const mapDispatchToProps = dispatch => {
  return {
    fetchRoleSuccess: () => dispatch(fetchRoleSuccess())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));
