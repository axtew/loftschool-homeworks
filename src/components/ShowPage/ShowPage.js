// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action

import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './ShowPage.module.css';
import { fetchShowRequest } from '../../actions';

class ShowPage extends Component {
  componentDidMount() {
    const { fetchShowRequest, match } = this.props;
    fetchShowRequest(match.params.id);
  }

  render() {
    const {
      shows: { entities }
    } = this.props;
    // console.log(this.props);

    return Object.keys(entities).length ? (
      <div>
        <p>{entities.name}</p>
        <img src={entities.image.medium} alt={entities.name} />
        <div dangerouslySetInnerHTML={{ __html: entities.summary }} />
        <div className={styles.cast}>
          {entities._embedded.cast.map(({ person, character }) => (
            <div key={`${person.id}+${character.id}`} className="t-person">
              <p>{person.name}</p>
              <img
                src={person.image.medium}
                alt={person.name}
              />
            </div>
          ))}
        </div>
      </div>
    ) : (
      <p>Загрузка</p>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = { fetchShowRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
