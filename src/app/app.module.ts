import { EffectsModule } from '@ngrx/effects';
// sudo sysctl fs.inotify.max_user_watches=524288
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
import { TodoListProviderService } from './services/todo-list-provider.service';
import { TodoHttpService } from './services/todo-http.service';
import { StoreModule } from '@ngrx/store';
import * as todosReducer from './store/todo.reducer';
import { TodosEffects } from './store/todos.effects';
import { TodoHelpers } from './services/todo.helpers';

@NgModule({
  declarations: [AppComponent, TodoListComponent, TodoOverviewComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ todos: todosReducer.todoReducer }),
    EffectsModule.forRoot([TodosEffects]),
  ],
  providers: [TodoListProviderService, TodoHttpService, TodoHelpers],
  bootstrap: [AppComponent],
})
export class AppModule {}
