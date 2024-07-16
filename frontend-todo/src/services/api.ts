import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api'
});

export const getTodos = () => api.get('/todos');
export const addTodo = (title: string) => api.post('/todos', { title });
export const updateTodo = (id: number, title: string, completed: boolean) => api.put(`/todos/${id}`, { title, completed });
export const deleteTodo = (id: number) => api.delete(`/todos/${id}`);
