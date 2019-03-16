import { Todo } from './../domain/TodoService';
import { TodoStore } from './TodoStore';

const todos: Todo[] = [
  {
    id: 'a7b0de7d-7329-4df7-9a3e-172306fe9f9b',
    text: 'Make todo app',
    createdBy: 'default-user',
    completed: false,
  },
  {
    id: 'a662b343-452b-4024-ba8b-41678c54b21b',
    text: 'Use todo app to demonstrate some stuff.',
    createdBy: 'default-user',
    completed: false,
  },
];

export const inMemoryTodoStore: TodoStore = {
  listTodos: async () => {
    return todos;
  },
  getTodo: async id => {
    return todos.find(todo => todo.id === id);
  },
  createTodo: async todo => {
    todos.push(todo);
  },
  updateTodo: async todo => {
    const i = todos.findIndex(({ id }) => id === todo.id);
    todos[i] = todo;
  },
  deleteTodo: async id => {
    const i = todos.findIndex(todo => id === todo.id);
    if (i === -1) return;
    todos.splice(i, 1);
  },
};
