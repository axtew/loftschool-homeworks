import React, { Component } from 'react';
import MailList from '../MailList';
import { withData } from '../../context/Data';

class OutboxList extends Component {
  render() {
    const {
      data: { outbox },
      ...props
    } = this.props;
    return <MailList {...props} data={outbox} type='outbox' />;
  }
}

export default withData(OutboxList);
