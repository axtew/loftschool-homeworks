// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './ShowPreview.module.css';

class ShowPreview extends Component {
  render() {
    const { id, name, image, summary } = this.props;
    return (
      <div>
        <div className={`t-preview ${styles.container}`}>
          <div>
            <Link className="t-link" to={`shows/${id}`}>
              {name}
            </Link>
            <img src={image} alt={name} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
      </div>
    );
  }
}

export default ShowPreview;
