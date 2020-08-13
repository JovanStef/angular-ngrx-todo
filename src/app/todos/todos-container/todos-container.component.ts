import { TodoOverviewComponent } from '../todo-overview/todo-overview.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos-container',
  templateUrl: './todos-container.component.html',
  styleUrls: ['./todos-container.component.css'],
})
export class TodosContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
