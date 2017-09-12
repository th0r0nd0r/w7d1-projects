import React from 'react';

const TodoListItem = (props) => {
  return <li className="item" key={props.todo.id}>{props.todo.title}</li>;
};

export default TodoListItem;
