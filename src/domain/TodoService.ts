import { Context } from '../context';
import { NOT_FOUND, NOT_AUTHORIZED } from './errors';
const uuid = require('uuid/v4');

export interface Todo {
  id: string;
  createdBy: string;
  text: string;
  completed: boolean;
}

export interface TodoService {
  listTodos(ctx: Context, input: {}): Promise<Todo[]>;
  createTodo(ctx: Context, input: { text: string }): Promise<Todo>;
  completeTodo(ctx: Context, input: { id: string }): Promise<Todo>;
  deleteTodo(ctx: Context, input: { id: string }): Promise<void>;
}

export const todoService: TodoService = {
  listTodos: async ({ todoStore }, _) => {
    return todoStore.listTodos();
  },
  createTodo: async ({ todoStore, claims }, { text }) => {
    const todo = {
      id: uuid(),
      createdBy: claims.id,
      text,
      completed: false,
    };
    await todoStore.createTodo(todo);
    return todo;
  },
  completeTodo: async ({ todoStore }, { id }) => {
    const todo = await todoStore.getTodo(id);

    if (!todo) {
      throw NOT_FOUND();
    }

    todo.completed = true;
    await todoStore.updateTodo(todo);

    return todo;
  },
  deleteTodo: async ({ todoStore, claims }, { id }) => {
    const todo = await todoStore.getTodo(id);

    if (!todo) return;
    if (todo.createdBy !== claims.id) throw NOT_AUTHORIZED();

    await todoStore.deleteTodo(id);
  },
};
