import { createAction, props } from '@ngrx/store';
import { ITodo } from '../todos/models/todo.model';

export const getTodos = createAction('[Todo List] Get Todos');
export const getTodosSuccess = createAction('[Todo List] Get Todos');

export const loadTodos = createAction('[Todo List] Load Todos');
export const loadTodosSucsess = createAction(
  '[Todo List] Load Todos Sucsess',
  props<{ todos: ITodo[] }>()
);

export const addTodo = createAction('[Todo List] Add Todo', props<ITodo>());
export const addTodoSuccess = createAction(
  '[Todo List] Add Todo Success',
  props<ITodo>()
);

export const removeTodo = createAction(
  '[Todo List] Remove Todo',
  props<ITodo>()
);

export const removeTodoSuccess = createAction(
  '[Todo List] Remove TodoSuccess',
  props<ITodo>()
);

export const removeAllTodos = createAction('[Todo Overview] Remove All Todos');
export const removeAllTodosSuccess = createAction(
  '[Todo Overview] Remove All Todos Success'
);
