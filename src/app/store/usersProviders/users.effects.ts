import { mergeMap, map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { UsersHttpService } from 'src/app/users/services/users-http.service';
import { Action } from '@ngrx/store';
import { Observable, EMPTY } from 'rxjs';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { loadUsers, loadUsersSuccess } from './users.actions';

@Injectable()
export class UsersEffects {
  loadUsers$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() => {
        return this.userService.getUsersJSON().pipe(
          map((users) => loadUsersSuccess({ users })),
          catchError(() => EMPTY)
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private userService: UsersHttpService
  ) {}
}
