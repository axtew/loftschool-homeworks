// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.

import React, { Component } from 'react';
import { connect } from 'react-redux';

import ShowPreview from '../ShowPreview';
import styles from './Search.module.css';
import { fetchSearchRequest } from '../../actions';

class Search extends Component {
  state = {
    searchInput: ''
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  handleClick = () => {
    const { fetchSearchRequest } = this.props;
    const { searchInput } = this.state;

    if (searchInput !== '') {
      fetchSearchRequest(searchInput);
    }
  };

  render() {
    const { searchValue } = this.state;
    const {
      search: { isFetching, result }
    } = this.props;

    return isFetching ? (
      <p>Выполняется поиск</p>
    ) : (
      <div>
        <div className={styles.previewList}>
          <input
            name="searchInput"
            className={`t-input ${styles.input}`}
            placeholder="Название сериала"
            value={searchValue}
            onChange={this.handleChange}
          />
          <div className={styles.buttonWrapper}>
            <button
              className={`${styles.button} t-search-button`}
              onClick={this.handleClick}
            >
              Найти
            </button>
          </div>
        </div>
        <div className={`t-search-result ${styles.searchPanel}`}>
          {result.length
            ? result.map(show => (
                <ShowPreview
                  key={show.id}
                  id={show.id}
                  name={show.name}
                  image={show.image.medium}
                  summary={show.summary}
                />
              ))
            : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = { fetchSearchRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
