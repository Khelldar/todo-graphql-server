import { Todo } from '../domain/TodoService';

export type Maybe<T> = T | undefined;
export interface TodoStore {
  listTodos(): Promise<Todo[]>;
  getTodo(id: string): Promise<Maybe<Todo>>;
  createTodo(todo: Todo): Promise<void>;
  updateTodo(todo: Todo): Promise<void>;
  deleteTodo(id: string): Promise<void>;
}
