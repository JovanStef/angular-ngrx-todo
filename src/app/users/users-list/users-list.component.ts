import { UserComponent } from './../userComponents/user/user.component';
import { loadUsers } from './../../store/usersProviders/users.actions';
import { Subscription, Observable } from 'rxjs';
import { appState } from './../../store/appState';
import { Component, OnInit } from '@angular/core';
import { UsersHttpService } from '../services/users-http.service';
import { Store } from '@ngrx/store';
import { IUser } from '../models/users.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  private _subscription: Subscription;
  users$: Observable<appState>;
  users: IUser[];
  constructor(
    private userService: UsersHttpService,
    private store: Store<{ users: appState }>
  ) {
    this.users$ = this.store.select((state) => {
      return state.users;
    });
  }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
    this.userService.getUsersJSON().subscribe((data) => {});
    this._subscription = this.users$.subscribe((data: appState) => {
      this.users = data.users;
      console.log(data);
    });
  }

  addNewUser(newUser: IUser) {
    console.log(newUser);
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
