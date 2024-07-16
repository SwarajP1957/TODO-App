import React, { useEffect, useState } from 'react';
import { getTodos } from '../services/api';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState<any[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await getTodos();
      setTodos(response.data);
    };

    fetchTodos();
  }, []);

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
