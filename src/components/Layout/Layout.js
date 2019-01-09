import React, { Fragment, PureComponent, Component } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { children, header, footer } = this.props;
    return (
      <Fragment>
        {header ? this.renderHeader(header) : null}
        <main className={`main ${header ? 'main--with-header' : null} ${footer ? 'main--with-footer' : null}`}>
          <SectionTitle className='main__title section-title'>Main</SectionTitle>
          {children}
        </main>
        {footer ? this.renderFooter(footer) : null}
      </Fragment>
    );
  }

  renderHeader(HeaderChild) {
    return (
      <header className='header'>
        <SectionTitle className='header__title'>Header</SectionTitle>
        <div className='header__content'>
          <HeaderChild />
        </div>
      </header>
    );
  };

  renderFooter(FooterChild) {
    return (
      <footer className="footer">
        <SectionTitle className='header__title section-title'>Footer</SectionTitle>
        <FooterChild />
      </footer>
    );
  }
}

export default Layout;
