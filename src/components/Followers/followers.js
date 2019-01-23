import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import {} from '../../modules/Followers';
import { connect } from 'react-redux';
import cx from 'classnames';

class Followers extends PureComponent {
  render() {
    const { data, isLoading } = this.props;

    if (data === null && !isLoading) {
      return <p className="t-no-followers">Нет информации о подписчиках</p>;
    } else if (data === null && isLoading) {
      return <p>Загрузка информации о подписчиках</p>;
    } else {
      return (
        <div className={cx(styles.root, 't-followers')}>
          {data.map(follower => (
            <div key={follower.id} className={styles.follower}>
              <img
                className={styles.followerImg}
                src={follower.avatar_url}
                alt={follower.login}
              />
              <p className={styles.followerLogin}>{follower.login}</p>
            </div>
          ))}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  data: state.followers.data,
  isLoading: state.followers.isLoading
});

export default connect(mapStateToProps)(Followers);
