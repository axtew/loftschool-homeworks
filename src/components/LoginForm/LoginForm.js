import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { withAuth } from '../../context/Auth';
import styles from './LoginForm.module.css';

const fields = [
  {
    id: 'email',
    label: 'Почта',
    type: 'text'
  },
  {
    id: 'password',
    label: 'Пароль',
    type: 'password'
  }
];

class LoginForm extends Component {
  state = {
    values: {
      email: '',
      password: ''
    }
  };

  handleChange = ({ target: { name, value } }) => {
    const { values } = this.state;
    this.setState({ values: { ...values, [name]: value } });
  };

  handleSubmit = () => {
    const { values } = this.state;
    const { authorize } = this.props;

    authorize(values.email, values.password);
  };

  render() {
    const { values } = this.state;
    const { isAuthorized, authError } = this.props;

    return isAuthorized ? (
      <Redirect to="/app" />
    ) : (
      <div className={styles.bg}>
        <div className={`${styles.form} t-form`}>
          {fields.map(({ id, label, type }) => (
            <p key={id} className="field">
              <label htmlFor={id}>
                <span className={styles.labelText}>{label}</span>
              </label>
              <input
                id={id}
                className={`${styles.input} t-input-${id}`}
                type={type}
                name={id}
                value={values[id]}
                onChange={this.handleChange}
              />
            </p>
          ))}
          {authError ? <p className={styles.error}>Почта или пароль не верные</p> : null}
          <div className={styles.buttons}>
            <button
              className={`${styles.button} t-login`}
              onClick={this.handleSubmit}
            >
              Войти
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(LoginForm);
