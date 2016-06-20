import React, { Component } from 'react';
import { fetchTodo } from '../services'

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
    const { todo } = this.state;
    if (!todo) {
      return (<div>Loading...</div>);
    }
    return (
      <div>
        <p><strong>{todo.name}</strong></p>
        <div><span>Status: {todo.status}</span><span>By: {todo.author}</span></div>
        <div>{todo.description}</div>
      </div>
    );
  }
}
