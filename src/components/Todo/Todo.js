import React, { PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

class Todo extends PureComponent {
  state = {
    inputValue: ''
  };

  getId() {
    const { savedData } = this.props;
    const biggest = savedData.reduce((acc, el) => Math.max(acc, el.id), 0);
    return biggest + 1;
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  createNewRecordByEnter = event => {
    if (event.keyCode === 13) this.createNewRecord();
  };

  toggleRecordComplete = event => {
    const currentId = Number(event.target.getAttribute('data-todo-id'));
    const { saveData, savedData } = this.props;

    let toggledRecord = savedData.find(record => record.id === currentId)
    const record = {
      id: toggledRecord.id,
      text: toggledRecord.text,
      checked: !toggledRecord.checked
    };

    saveData(record)
  };

  createNewRecord = () => {
    const { saveData } = this.props;
    const { inputValue } = this.state;

    if (inputValue === '') return;

    let record = {
      id: this.getId(),
      text: inputValue,
      checked: false
    };

    this.setState({ inputValue: '' });
    saveData(record);
  };

  render() {
    const { savedData } = this.props;

    return (
      <Card title="Список дел">
        <div className="todo t-todo-list">
          <div className="todo-item todo-item-new">
            <input
              className="todo-input t-input"
              placeholder="Введите задачу"
              value={this.state.inputValue}
              onChange={this.handleChange}
              onKeyDown={this.createNewRecordByEnter}
            />
            <span className="plus t-plus" onClick={this.createNewRecord}>
              +
            </span>
          </div>
          {savedData.length
            ? savedData.map(record => this.renderRecord(record))
            : null}
        </div>
      </Card>
    );
  }

  renderEmptyRecord() {
    return;
  }

  renderRecord = (record) => {
    return (
      <div key={record.id} className="todo-item t-todo">
        <p className="todo-item__text">{record.text}</p>
        <span
          className="todo-item__flag t-todo-complete-flag"
          data-todo-id={record.id}
          onClick={this.toggleRecordComplete}
        >
          {record.checked ? `[x]` : `[ ]`}
        </span>
      </div>
    );
  };
}

export default withLocalstorage('todo-app', [])(Todo);
