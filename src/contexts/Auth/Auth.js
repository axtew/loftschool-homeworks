import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    email: '',
    authorizeError: '',
    password: '',
    isAuthorized: false
  };

  authorize = (email, password) => {
    email === 'stu@dent.com' && password === '123'
      ? this.setState({
          isAuthorized: true,
          email: 'stu@dent.com',
          password: '123',
          authorizeError: ''
        })
      : this.setState({
          authorizeError: 'Email или пароль введён не верно'
        });
  };

  setAuthorizeError = error => {
    console.log(error)
    this.setState({ authorizeError: error });
  };

  logout = () => {
    this.setState({ isAuthorized: false, email: '', password: '' });
  };

  getProviderValue = () => {
    const { email, isAuthorized, authorizeError } = this.state;

    const providerValueKeys = {
      email: email,
      isAuthorized: isAuthorized,
      authorizeError: authorizeError,
      authorize: this.authorize,
      logout: this.logout,
      setAuthorizeError: this.setAuthorizeError
    };
    return providerValueKeys;
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
