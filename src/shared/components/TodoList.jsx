import React, { Component } from 'react';
import { STATUS_DONE, STATUS_IN_PROGRESS, STATUS_PENDING } from '../types';

import './TodoList.scss';

export default class TodoList extends Component {

  renderList() {
    return this.props.todos.map((todo) => {
      let iconClass;
      switch (todo.status) {
        case STATUS_DONE:
          iconClass = 'glyphicon-ok';
          break;
        case STATUS_IN_PROGRESS:
          iconClass = 'glyphicon-refresh';
          break;
        case STATUS_PENDING:
          iconClass = 'glyphicon-play-circle';
          break;
        default:
          iconClass = '';
          break;
      }
      return (
        <li
          className='todo'
          key={todo.id}
          onClick={() => {this.props.onTodoSelected(todo)}}>
          <span className={`glyphicon ${iconClass}`} aria-hidden="true"></span>
          <span className='lead'>{todo.name}</span>

        </li>
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
      <ul className="list-unstyled">
        {this.renderList()}
      </ul>
    );
  }
}
