import { EffectsModule } from '@ngrx/effects';
// sudo sysctl fs.inotify.max_user_watches=524288
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoOverviewComponent } from './todos/todo-overview/todo-overview.component';
import { TodoListProviderService } from './todos/services/todo-list-provider.service';
import { TodoHttpService } from './todos/services/todo-http.service';
import { StoreModule } from '@ngrx/store';
import * as todosReducer from './store/todo.reducer';
import { TodosEffects } from './store/todos.effects';
import { TodoHelpers } from './todos/services/todo.helpers';
import { UsersListComponent } from './users/users-list/users-list.component';
import { AppRoutingModule, routes } from './app-routing./app-routing.module';
import { TodosContainerComponent } from './todos/todos-container/todos-container.component';
import { HeaderComponent } from './header/header.component';
import { UsersHttpService } from './users/services/users-http.service';
import { UsersHelpersService } from './users/services/users-helpers.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoOverviewComponent,
    UsersListComponent,
    TodosContainerComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ todos: todosReducer.todoReducer }),
    EffectsModule.forRoot([TodosEffects]),
  ],
  providers: [
    TodoListProviderService,
    TodoHttpService,
    UsersHttpService,
    UsersHelpersService,
    TodoHelpers,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
