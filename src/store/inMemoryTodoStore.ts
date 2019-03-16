import { Todo } from './../domain/TodoService';
import { TodoStore } from './TodoStore';

const todos: Todo[] = [];

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
