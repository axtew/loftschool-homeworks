import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './MailList.module.css';

class MailList extends Component {
  render() {
    const { data, match, type } = this.props;

    // console.log(data.substr(0, 15))

    return (
      <div className={`${styles.container} ${type === 'inbox' ? 't-inbox-list' : 't-outbox-list'}`}>
        {data.map(mail => (
          <Link key={mail.id} className={styles.link} to={`${match.url}/${mail.id}`}>
            {`${mail.body.substr(0, 50)}...`}
          </Link>
        ))}
      </div>
    );
  }
}

export default MailList;
