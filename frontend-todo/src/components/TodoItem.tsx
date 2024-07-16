import React from 'react';
import { updateTodo, deleteTodo } from '../services/api';

const TodoItem = ({ todo }: { todo: any }) => {
  const handleToggle = async () => {
    await updateTodo(todo.id, todo.title, !todo.completed);
    // Reload todos or update state
  };

  const handleDelete = async () => {
    await deleteTodo(todo.id);
    // Reload todos or update state
  };

  return (
    <li>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={handleToggle} 
      />
      {todo.title}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
