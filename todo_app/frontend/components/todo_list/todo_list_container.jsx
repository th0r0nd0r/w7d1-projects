import { connect } from 'react-redux';
import TodoList from './todo_list';

import {getAllTodos} from '../../reducers/selectors';
import {receiveTodo, receiveTodos, fetchTodos, createTodo} from "../../actions/todo_actions";
import TodoForm from './todo_form';


const mapStateToProps = state => ({
  todos: getAllTodos(state)
});

const mapDispatchToProps = dispatch => ({
  // receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  createTodo: (todo) => dispatch(createTodo(todo)),
  receiveTodos: () => dispatch(receiveTodos()),
  fetchTodos: () => dispatch(fetchTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
