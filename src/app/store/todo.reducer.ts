import { ITodo } from '../models/todo.model';
import { loadTodos, addTodo, loadTodosSucsess } from './todo.actions';
import { Action, createReducer, on } from '@ngrx/store';

export interface todosState {
  todos: ITodo[];
}

export const initalState: todosState = {
  todos: [
    {
      id: 22,
      description: 'string',
      responsible: 'string',
      priority: 'string',
      isCompleted: false,
    },
  ],
};

const _todoReducer = createReducer(
  initalState,
  on(loadTodos, (state) => state),
  on(loadTodosSucsess, (state, { todos }) => ({
    todos: todos,
  })),
  on(addTodo, (state, { todo }) => ({ ...state, todo: state.todos.push(todo) }))
);

export function todoReducer(state: todosState | undefined, action: Action) {
  return _todoReducer(state, action);
}
