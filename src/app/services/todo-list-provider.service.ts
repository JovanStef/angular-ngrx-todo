import { TodoHttpService } from './todo-http.service';
import { Observable, Subject } from 'rxjs';
import { ITodo } from '../models/todo.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoListProviderService {
  formatResponse(arr) {
    return arr.map((obj) => {
      return {
        id: obj.id,
        description: obj.title,
        responsible: obj.userId + '',
        priority: 'low',
        isCompleted: obj.completed,
      };
    });
  }
}
