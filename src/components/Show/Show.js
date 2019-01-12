import React, { Component } from 'react';

import { getShowInfo } from '../../api';
import './Show.css';

class Show extends Component {
  state = {
    showId: '',
    data: {}
  };

  componentDidUpdate(prevProps) {
    const { showId } = this.props;
    if (showId !== prevProps.showId) {
      getShowInfo(showId).then(data => {
        this.setState({ data, showId: showId });
      });
    }
  }

  render() {
    console.log('render')
    const {
      data,
      data: { image, name, genres, summary }
    } = this.state;

    return Object.keys(data).length === 0 ? (
      <p className="show-inforation t-show-info">Шоу не выбрано</p>
    ) : (
      <div className="show">
        <img className="show-image" src={image.original} alt={name} />
        <h2 className="show-label t-show-name">{name}</h2>
        <p className="show-text t-show-genre">
          <b>Жанр: </b>
          {genres.join(', ')}
        </p>
        <p
          className="show-text t-show-summary"
          dangerouslySetInnerHTML={{ __html: summary }}
        />
      </div>
    );
  }
}

export default Show;
