import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../Login';
import Search from '../Search';
import PrivateRoute from '../PrivateRoute';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact />
          <PrivateRoute path="/search" component={Search} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
