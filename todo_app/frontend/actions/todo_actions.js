import * as TodosAPIUtil from "../util/todo_api_util";
import receiveErrors from '/.error_actions';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';


export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export const fetchTodos = () => dispatch => (
  TodosAPIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)))
);

export const createTodo = (todo) => dispatch => (
  TodosAPIUtil.createTodo(todo)
  .then(
    resp => dispatch(receiveTodo(resp)),
    err => dispatch(receiveErrors(err))
  )
);

// how does it know what is todo and what is err?
