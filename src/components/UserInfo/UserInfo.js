import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';

import { connect } from 'react-redux';

class UserInfo extends PureComponent {
  render() {
    const { data, isLoading } = this.props;
    if (data === null && !isLoading) {
      return <p className="t-no-user-info">Нет информации о пользователе</p>;
    } else if (data === null && isLoading) {
      return <p>Загрузка информации о пользователе</p>;
    } else {
      return (
        <div className={styles.root}>
          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              src={data.avatar_url}
              alt={data.name}
            />
          </div>
          <p className="t-user-name">{data.name}</p>
          <p className="t-user-bio">{data.bio}</p>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  data: state.user.data,
  isLoading: state.user.isLoading
});

export default connect(mapStateToProps)(UserInfo);
