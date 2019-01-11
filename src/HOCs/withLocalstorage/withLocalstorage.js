import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (localStorageKey, data) => WrappedComponent => {
  return class extends Component {
    state = {
      savedData: data
    };

    componentDidMount() {
      load(localStorageKey)
        ? this.setState({
            savedData: load(localStorageKey)
          })
        : null;
    }

    saveData = newRecord => {
      const { savedData } = this.state;
      let arr = savedData;

      const isOldRecord = record => record.id === newRecord.id;
      if (savedData.findIndex(isOldRecord) !== -1) {
        arr = savedData.map(item => (isOldRecord(item) ? newRecord : item));
      } else {
        arr.push(newRecord);
      }

      this.setState({
        savedData: arr
      });

      save(localStorageKey, savedData);
    };

    render() {
      return (
        <div>
          <WrappedComponent
            {...this.props}
            savedData={this.state.savedData}
            saveData={this.saveData}
          />
        </div>
      );
    }
  };
};

export default withLocalstorage;
