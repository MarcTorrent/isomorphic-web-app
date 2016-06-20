import Todos from '../todos';

export function fetchTodos() {
  const fetch = new Promise(function(resolve, reject){
    resolve(Todos);
  });

  return fetch;
}

export function fetchTodo(id) {
  const fetch = new Promise(function(resolve, reject){
    let todo;
    Todos.forEach(function(_todo) {
      if (_todo.id === id) {
        todo = _todo;
      }
    });
    resolve(todo);
  });

  return fetch;
}
