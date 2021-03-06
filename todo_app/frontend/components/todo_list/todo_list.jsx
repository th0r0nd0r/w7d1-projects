import React from 'react';

// import getAllTodos from '../../reducers/selectors';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

// const List = ({todos}) => {
//   const list = getAllTodos(todos);
//   return (
//     <ul>{list}</ul>
//   );
// };

class TodoList extends React.Component {

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {

    const { todos, createTodo } = this.props;
    let items = todos.map( (todo) => (
      <TodoListItem
        key={todo.id}
        todo={todo}
        createTodo={ createTodo } />
    ));

    return (
      <div className="list">
        <h2>Todo List&#58;</h2>
        <ul className='list-items'>
          {items}
        </ul>
        <br />
        <div className="todo-form">
          <h2>Add a Todo Item&#58;</h2>
          <TodoForm createTodo={ createTodo }/>
        </div>
      </div>
    );
  }
}
//change receive to create?
export default TodoList;
