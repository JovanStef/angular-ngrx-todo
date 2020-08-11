import { loadTodos, loadTodosSucsess } from './todo.actions';
import { Injectable } from '@angular/core';
import { TodoHttpService } from '../services/todo-http.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, catchError, map, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
@Injectable()
export class TodosEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      switchMap(() =>
        this.todoService.getTodosJSON().pipe(
          map((todos) => loadTodosSucsess({ todos: todos })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private todoService: TodoHttpService
  ) {}
}
