import React, { Component } from 'react';
import Home from './containers/Home';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Layout from './components/Layout';

class App extends Component{
  render() {
    const { isAuthenticated } = this.props;
    let routes = (
        <Switch>
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
    );

    return (
        <div>
          <Layout>
            {routes}
          </Layout>
        </div>
    );
  }
};

export default withRouter( App );
