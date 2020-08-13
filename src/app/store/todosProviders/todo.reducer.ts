import {
  loadTodos,
  addTodoSuccess,
  loadTodosSucsess,
  addTodo,
  removeTodo,
  removeTodoSuccess,
  getTodos,
  removeAllTodos,
  removeAllTodosSuccess,
} from './todo.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { TodoHelpers } from '../../todos/services/todo.helpers';
import { appState, initalState } from '../appState';

const tHelper = new TodoHelpers();

const _todoReducer = createReducer(
  initalState,
  on(getTodos, (state) => state),
  on(loadTodos, (state) => state),
  on(loadTodosSucsess, (state, todos) => {
    return Object.assign({}, state, {
      todos: todos.todos,
      dateModified: new Date(),
    });
  }),
  on(addTodo, (state) => state),
  on(addTodoSuccess, (state, todo) => {
    return Object.assign({}, state, {
      todos: [...state.todos, todo],
      dateModified: new Date(),
    });
  }),

  on(removeTodo, (state) => state),

  on(removeTodoSuccess, (state, todo) => {
    let newTodos = tHelper.deleteTodo(state.todos, todo);
    return Object.assign({}, state, {
      todos: newTodos,
      dateModified: new Date(),
    });
  }),
  on(removeAllTodos, (state) => state),
  on(removeAllTodosSuccess, (state) => {
    return Object.assign({}, state, {
      todos: [],
      dateModified: new Date(),
    });
  })
);

export function todoReducer(state: appState | undefined, action: Action) {
  return _todoReducer(state, action);
}
