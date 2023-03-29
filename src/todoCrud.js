import { Todo } from './index';
import { todos } from './index';

export const addTodo = (description) => {
    const todo = new Todo(description, false, todos.todos.length);
    todos.add(todo);
    todos.save();
    todos.render();
};

export const removeTodo = (id) => {
    todos.remove(todos.todos[id]);
    todos.todos.forEach((t, i) => {
        t.index = i;
    });
    todos.save();
    todos.render();
}

export const markCompleted = (id) => {
    todos.todos[id].completed = !todos.todos[id].completed;
    todos.save();
    todos.render();
}