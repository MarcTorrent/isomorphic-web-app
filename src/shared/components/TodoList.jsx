import React, { Component } from 'react';

export default class TodoList extends Component {

  renderList() {
    return this.props.todos.map((todo) => {
      return (
        <li key={todo.id} onClick={() => {this.props.onTodoSelected(todo)}}>{todo.name}</li>
      );
    });
  }

  render() {
    if (!this.props.todos) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}
