import { TodosContainerComponent } from './../todos/todos-container/todos-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from '../users/users-list/users-list.component';

export const routes: Routes = [
  { path: '', component: TodosContainerComponent },
  { path: 'todos-list', component: TodosContainerComponent },
  { path: 'users-list', component: UsersListComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
