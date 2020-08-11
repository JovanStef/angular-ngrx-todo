import { createAction, props } from '@ngrx/store';
import { ITodo } from '../models/todo.model';

export const loadTodos = createAction('[Todo List] Load Todos');
export const loadTodosSucsess = createAction(
  '[Todo List] Load Todos Sucsess',
  props<{ todos: ITodo[] }>()
);

export const addTodo = createAction(
  '[Todo List] Add Todo',
  props<{ todo: ITodo }>()
);
