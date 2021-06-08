import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    toDoItems: [
      { id: 1, title: 'Buy groceries', isDone: false },
      { id: 2, title: 'Cook dinner', isDone: false },
      { id: 3, title: 'Go to gym', isDone: true },
    ],
    newToDoItem: 'Enter new todo...',
  };

  changeInputValue = (e) => {
    this.setState({ newToDoItem: e.target.value });
  };

  clearInputValue = () => {
    this.setState({ newToDoItem: '' });
  };

  addNewToDoItem = () => {
    this.setState({
      toDoItems: [
        ...this.state.toDoItems,
        {
          id: Date.now(),
          title: this.state.newToDoItem,
          isDone: false,
        },
      ],
      newToDoItem: 'Enter new todo...',
    });
  };

  changeStatus = (todoItem) => {
    this.setState({
      toDoItems: this.state.toDoItems.map((item) =>
        item.id === todoItem.id ? { ...item, isDone: !item.isDone } : item
      ),
    });
  };

  render() {
    return (
      <div className="container">
        <ul className="to-do-list">
          {this.state.toDoItems.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => this.changeStatus(item)}
                className={
                  item.isDone
                    ? 'to-do-list_item done'
                    : 'to-do-list_item not-done'
                }
              >
                {item.title}
              </li>
            );
          })}
        </ul>
        <div className="to-do-form">
          <input
            className="to-do-form_input"
            value={this.state.newToDoItem}
            onChange={this.changeInputValue}
            onFocus={this.clearInputValue}
          ></input>
          <button className="to-do-form_button" onClick={this.addNewToDoItem}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default App;
