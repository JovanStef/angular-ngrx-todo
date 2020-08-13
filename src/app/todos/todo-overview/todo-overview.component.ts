import { Observable, Subject, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { appState } from '../../store/todo.reducer';
import { Store } from '@ngrx/store';
import { removeAllTodosSuccess } from '../../store/todo.actions';

@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.css'],
})
export class TodoOverviewComponent implements OnInit, OnDestroy {
  private _subscription: Subscription;

  todos$: Observable<appState>;
  numberOfTodos: number = 0;
  dateModified: Date = null;

  constructor(private store: Store<{ todos: appState }>) {
    this.todos$ = this.store.select((state) => state.todos);
  }

  ngOnInit(): void {
    this._subscription = this.todos$.subscribe((data: appState) => {
      this.numberOfTodos = data.todos.length;
      this.dateModified = data.dateModified;
      console.log(data);
    });
  }

  clearTodos() {
    this.store.dispatch(removeAllTodosSuccess());
  }
  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
