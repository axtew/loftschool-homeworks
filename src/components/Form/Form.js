import React, { Component } from 'react';
import './Form.css';

const defaultValues = {
  firstname: 'james',
  lastname: 'bond',
  password: '007'
};

const fieldsStatus = {
  firstname: {
    empty: 'Нужно указать имя',
    error: 'Имя указано не верно'
  },
  lastname: {
    empty: 'Нужно указать фамилию',
    error: 'Фамилия указана не верно'
  },
  password: {
    empty: 'Нужно указать пароль',
    error: 'Пароль указан не верно'
  }
};

class Form extends Component {
  state = {
    firstname: '',
    lastname: '',
    password: '',
    errors: {},
    isValidate: false,
  };

  onChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
      errors: {}
    });
  };

  onSubmit = event => {
    event.preventDefault();

    let errors = {};
    Object.keys(fieldsStatus).forEach(key => {
      if (this.state[key] === '') {
        errors[key] = fieldsStatus[key].empty;
      } else if (this.state[key].toLowerCase() !== defaultValues[key]) {
        errors[key] = fieldsStatus[key].error;
      }
    });

    Object.keys(errors).length
      ? this.setState({ errors })
      : this.setState({ isValidate: true });
  };

  render() {
    return (
      <div className="app-container">
        {this.state.isValidate ? (
          <img
            alt="bond approve"
            className="t-bond-image"
            src="/static/media/bond_approve.jpg"
          />
        ) : (
          <form className="form" onSubmit={this.onSubmit}>
            <h1>Введите свои данные, агент</h1>
            <p className="field">
              <label className="field__label" htmlFor="firstname">
                <span className="field-label">Имя</span>
              </label>
              <input
                className="field__input field-input t-input-firstname"
                name="firstname"
                onChange={this.onChange}
              />
              <span className="field__error field-error t-error-firstname">
                {this.state.errors.firstname}
              </span>
            </p>
            <p className="field">
              <label className="field__label" htmlFor="lastname">
                <span className="field-label">Фамилия</span>
              </label>
              <input
                className="field__input field-input t-input-lastname"
                name="lastname"
                onChange={this.onChange}
              />
              <span className="field__error field-error t-error-lastname">
                {this.state.errors.lastname}
              </span>
            </p>
            <p className="field">
              <label className="field__label" htmlFor="password">
                <span className="field-label">Пароль</span>
              </label>
              <input
                className="field__input field-input t-input-password"
                name="password"
                type="password"
                onChange={this.onChange}
              />
              <span className="field__error field-error t-error-password">
                {this.state.errors.password}
              </span>
            </p>
            <div className="form__buttons">
              <input
                className="button t-submit"
                type="submit"
                value="Проверить"
              />
            </div>
          </form>
        )}
      </div>
    );
  }
}

export default Form;
