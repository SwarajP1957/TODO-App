import React from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const Home = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Home;
