const Todo = require('../models/todo');

exports.getTodos = async (req, res) => {
  const todos = await Todo.findAll();
  res.json(todos);
};

exports.addTodo = async (req, res) => {
  const { title } = req.body;
  const newTodo = await Todo.create({ title });
  res.json(newTodo);
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  await Todo.update({ title, completed }, { where: { id } });
  res.json({ message: 'Todo updated' });
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  await Todo.destroy({ where: { id } });
  res.json({ message: 'Todo deleted' });
};
