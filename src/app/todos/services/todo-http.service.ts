import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

import { ITodo } from '../models/todo.model';
import { TodoListProviderService } from './todo-list-provider.service';

@Injectable({
  providedIn: 'root',
})
export class TodoHttpService {
  constructor(
    private http: HttpClient,
    private formatHttp: TodoListProviderService
  ) {}
  getTodosJSON(): Observable<ITodo[]> {
    return this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/todos', {
        responseType: 'json',
      })
      .pipe(
        map((res) => {
          return this.formatHttp.formatResponse(res);
        })
      );
  }
}
