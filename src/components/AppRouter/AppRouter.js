// Реализуйте роутер
// Вам нужно определить корневой роут, который будет вести на страницу поиска.
// Роут шоу должен принимать id в параметрах.
import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import Search from '../Search';
import ShowPage from '../ShowPage';
import './AppRouter.css';

class AppRouter extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path={'/'} component={Search} exact />
          <Route path={'/shows/:id'} component={ShowPage} exact />
        </Switch>
      </div>
    );
  }
}

export default AppRouter;
