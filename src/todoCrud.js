const addTodo = (Todo, todos, description) => {
  const todo = new Todo(description, false, todos.todos.length);
  todos.add(todo);
  todos.save();
  todos.render();
};

const removeTodo = (id, todos) => {
  todos.remove(todos.todos[id]);
  todos.todos.forEach((t, i) => {
    t.index = i;
  });
  todos.save();
  todos.render();
};

const markCompleted = (id, todos) => {
  todos.todos[id].completed = !todos.todos[id].completed;
  todos.save();
  todos.render();
};

export { addTodo, removeTodo, markCompleted };