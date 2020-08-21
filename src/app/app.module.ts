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
import * as todosReducer from './store/todosProviders/todo.reducer';
import * as userReducer from './store/usersProviders/users.reducer';
import { TodosEffects } from './store/todosProviders/todos.effects';
import { TodoHelpers } from './todos/services/todo.helpers';
import { UsersListComponent } from './users/users-list/users-list.component';
import { AppRoutingModule, routes } from './app-routing./app-routing.module';
import { TodosContainerComponent } from './todos/todos-container/todos-container.component';
import { HeaderComponent } from './header/header.component';
import { UsersHttpService } from './users/services/users-http.service';
import { UsersHelpersService } from './users/services/users-helpers.service';
import { UsersEffects } from './store/usersProviders/users.effects';
import { UserComponent } from './users/userComponents/user/user.component';
import { AdressComponent } from './users/userComponents/adress/adress.component';
import { GeoComponent } from './users/userComponents/geo/geo.component';
import { CompanyComponent } from './users/userComponents/company/company.component';
import { CreateUserComponent } from './users/create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoOverviewComponent,
    UsersListComponent,
    TodosContainerComponent,
    HeaderComponent,
    UserComponent,
    AdressComponent,
    GeoComponent,
    CompanyComponent,
    CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      todos: todosReducer.todoReducer,
      users: userReducer.userReducer,
    }),
    EffectsModule.forRoot([TodosEffects, UsersEffects]),
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
