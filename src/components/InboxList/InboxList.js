import React, { Component } from 'react';
import MailList from '../MailList';
import { withData } from '../../context/Data';

class InboxList extends Component {
  render() {
    const {
      data: { inbox },
      ...props
    } = this.props;
    return <MailList {...props} data={inbox} type='inbox' />;
  }
}

export default withData(InboxList);
