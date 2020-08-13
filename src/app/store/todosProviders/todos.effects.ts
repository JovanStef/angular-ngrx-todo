import {
  loadTodos,
  loadTodosSucsess,
  addTodoSuccess,
  addTodo,
  removeTodo,
  removeTodoSuccess,
  getTodos,
  getTodosSuccess,
  removeAllTodos,
  removeAllTodosSuccess,
} from './todo.actions';
import { ITodo } from '../../todos/models/todo.model';
import { Injectable } from '@angular/core';
import { TodoHttpService } from '../../todos/services/todo-http.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, catchError, map, switchMap } from 'rxjs/operators';
import { EMPTY, Observable, from } from 'rxjs';
import { Action } from '@ngrx/store';
import { TodoHelpers } from '../../todos/services/todo.helpers';

@Injectable()
export class TodosEffects {
  loadTodos$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      mergeMap(() =>
        this.todoService.getTodosJSON().pipe(
          map((todos) => loadTodosSucsess({ todos: todos })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  getTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getTodos),
      map((data) => {
        return getTodosSuccess();
      })
    );
  });
  addTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addTodo),
      map((data) => {
        return addTodoSuccess(data);
      })
    );
  });

  removeTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(removeTodo),
      map((data) => {
        return removeTodoSuccess(data);
      })
    );
  });

  removeAllTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(removeAllTodos),
      map(() => {
        return removeAllTodosSuccess();
      })
    );
  });

  constructor(
    private actions$: Actions,
    private todoService: TodoHttpService,
    private todoHelpers: TodoHelpers
  ) {}
}
