import { ITodo } from './todo.model';
export interface TodoList {
  todos: ITodo[];
  lastUpdated: Date;
}
