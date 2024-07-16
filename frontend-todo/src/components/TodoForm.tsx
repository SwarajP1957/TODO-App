import React, { useState } from 'react';
import { addTodo } from '../services/api';

const TodoForm = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      await addTodo(title);
      setTitle('');
      // Reload todos or update state
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Add a new todo" 
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
