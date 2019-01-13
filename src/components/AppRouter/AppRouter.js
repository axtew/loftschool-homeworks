import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import styles from './AppRouter.module.css';

import Home from '../Home';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';

class AppRoute extends Component {
  render() {
    const {
      computedMatch: match,
      location: { pathname }
    } = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <ul className={`${styles.navList} t-nav-list`}>
              <li className={styles.navElement}>
                <Link
                  className={`${styles.link} t-link-home ${
                    pathname === '/app' ? 'active' : null
                  }`}
                  to={`${match.url}`}
                >
                  Home
                </Link>
              </li>
              <li className={styles.navElement}>
                <Link
                  className={`${styles.link} t-link-inbox ${
                    pathname === '/app/inbox' ? 'active' : null
                  }`}
                  to={`${match.url}/inbox`}
                >
                  Inbox
                </Link>
              </li>
              <li className={styles.navElement}>
                <Link
                  className={`${styles.link} t-link-outbox ${
                    pathname === '/app/outbox' ? 'active' : null
                  }`}
                  to={`${match.url}/outbox`}
                >
                  Outbox
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.content}>
            <h3 className={styles.title}>Home</h3>
            <Switch>
              <Route path={`${match.path}`} component={Home} exact />
              <Route path={`${match.path}/inbox`} component={InboxList} exact />
              <Route
                path={`${match.path}/outbox`}
                component={OutboxList}
                exact
              />
              <Route path={`${match.path}/inbox/:id`} component={InboxMail} />
              <Route path={`${match.path}/outbox/:id`} component={OutboxMail} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default AppRoute;
