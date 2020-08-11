import { loadTodos } from './../store/todo.actions';
import { removeTodo } from './../services/todo.helpers';
import { ITodo } from '../models/todo.model';
import { Component, OnInit } from '@angular/core';
import { addTodo } from '../services/todo.helpers';
import { TodoListProviderService } from '../services/todo-list-provider.service';
import { Observable, Subject } from 'rxjs';
import { TodoHttpService } from '../services/todo-http.service';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos$: Observable<ITodo[]> = this.store.select((state) => state.todos);
  loading = true;
  todo: ITodo = {
    id: 0,
    description: '',
    responsible: '',
    priority: '',
    isCompleted: false,
  };
  todos: ITodo[] = [];

  constructor(
    private todoLoader: TodoHttpService,
    private store: Store<{ todos: ITodo[] }>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadTodos());
    this.todos$.subscribe((data: ITodo[]) => {
      console.log(data);
      this.todos = [...data];
      this.loading = false;
    });
    // this.todoLoader.getTodosJSON().subscribe((data: ITodo[]) => {
    //   this.todos = [...data];
    //   this.loading = false;
    // });
  }
  onSubmit(todo) {
    addTodo(todo, this.todos);
  }

  toggleTodo(todo) {}

  removeTodo(todo) {
    this.todos = removeTodo(todo, this.todos);
    // this.todos = this._todoListProviderService.todos;
  }
}
