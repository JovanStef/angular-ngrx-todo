import { NgForm } from '@angular/forms';
import { loadTodos, addTodo, removeTodo } from '../../store/todo.actions';
import { ITodo } from '../models/todo.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoHelpers } from '../services/todo.helpers';
import { Observable, Subject, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { appState } from '../../store/todo.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit, OnDestroy {
  private _subscription: Subscription;
  todos$: Observable<appState>;
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
    private store: Store<{ todos: appState }>,
    private todoHelpers: TodoHelpers
  ) {
    this.todos$ = this.store.select((state) => {
      return state.todos;
    });
  }

  ngOnInit(): void {
    this.store.dispatch(loadTodos());
    this._subscription = this.todos$.subscribe((data: appState) => {
      this.todos = data.todos;
      this.loading = false;
    });
  }
  onSubmit(form: NgForm) {
    let todo = this.todoHelpers.formatTodo(form.value, this.todos);
    this.store.dispatch(addTodo(todo));
  }

  toggleTodo(todo) {}

  deleteTodo(todo) {
    this.store.dispatch(removeTodo(todo));
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
