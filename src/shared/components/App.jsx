import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Todos from '../todos';

import { fetchTodos } from '../services';
import TodoList from './TodoList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  showTodo(todo) {
    this.props.router.push('/' + todo.id);
  }

  componentWillMount() {
    this.setState({todos: Todos});

    // fetchTodos()
    //   .then(todos => {
    //     this.setState({todos: todos});
    //   });
  }

  render() {
    return (
      <div className="app">
        <h1>My first Isomorphic TODO List</h1>
        <div>
          <TodoList todos={this.state.todos} onTodoSelected={this.showTodo.bind(this)}/>
        </div>

        {this.props.children}
      </div>
    );
  }
}

export default withRouter(App);
