import { Todo } from './index';
import { todos } from './index';

export const addTodo = (description) => {
    const todo = new Todo(description, false, todos.todos.length);
    todos.add(todo);
    todos.render();
};

export const removeTodo = (id) => {
    todos.remove(todos.todos[id]);
    todos.render();
}