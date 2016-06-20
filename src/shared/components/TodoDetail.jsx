import React, { Component } from 'react';
import { fetchTodo } from '../services'
import { STATUS_DONE, STATUS_IN_PROGRESS, STATUS_PENDING } from '../types';
import './TodoDetail.scss';

export default class TodoDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  updateTodoDetailContent(todoId) {
    fetchTodo(todoId)
      .then((todo) => {
        this.setState({todo: todo})
      });
  }

  componentWillMount() {
    this.updateTodoDetailContent(parseInt(this.props.params.id, 10));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id !== this.props.params.id) {
      this.updateTodoDetailContent(parseInt(nextProps.params.id, 10));
    }
  }

  render() {
    let iconClass;
    const { todo } = this.state;
    if (!todo) {
      return (<div>Loading...</div>);
    }

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
      <div className="todo">
        <h2><strong>{todo.name}</strong></h2>
        <div><span className={`glyphicon ${iconClass}`}></span><span className="lead">By: <strong>{todo.author}</strong></span></div>
        <div className="description">{todo.description}</div>
      </div>
    );
  }
}
