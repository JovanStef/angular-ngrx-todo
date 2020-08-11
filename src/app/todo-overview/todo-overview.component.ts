import { Observable, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TodoListProviderService } from '../services/todo-list-provider.service';

@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.css'],
})
export class TodoOverviewComponent implements OnInit {
  // todos = this._todoListProviderService.getTodos();
  // lastUpdate = this.todos.length;
  constructor(private _todoListProviderService: TodoListProviderService) {}

  ngOnInit(): void {}

  clearTodos() {}
}
