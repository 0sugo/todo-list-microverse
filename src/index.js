import './style.css';
import './input.css';

const todoList = document.querySelector('#todo-list');

class Todo {
  constructor(decription, completed, index) {
    this.decription = decription;
    this.completed = completed;
    this.index = index;
  }
}

class Todos {
  constructor() {
    this.todos = [
      new Todo('Learn JavaScript', false, 0),
      new Todo('Learn Angular', false, 1),
      new Todo('Learn React', false, 2),
      new Todo('Learn Vue', false, 3),
    ];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(todo) {
    this.todos = this.todos.filter((t) => t !== todo);
  }

  render() {
    todoList.innerHTML = '';
    this.todos.forEach((todo) => {
      const div = document.createElement('div');
      div.classList.add('flex', 'justify-between', 'items-center', 'p-4', 'border-b', 'border-gray-200');
      const div2 = document.createElement('div');
      div2.classList.add('flex', 'items-center');
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.classList.add('mr-2');
      const p = document.createElement('p');
      p.classList.add('text-gray-500');
      p.textContent = todo.decription;
      const i = document.createElement('i');
      i.classList.add('fa', 'fa-ellipsis-v', 'text-sm', 'cursor-move', 'text-gray-500', 'hove');
      i.setAttribute('aria-hidden', 'true');

      div2.appendChild(input);
      div2.appendChild(p);
      div.appendChild(div2);
      div.appendChild(i);
      todoList.appendChild(div);
    });
  }
}

const todos = new Todos();
todos.render();
