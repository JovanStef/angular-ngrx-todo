import { createAction, props } from '@ngrx/store';
import { IUser } from '../../users/models/users.model';

export const getUsers = createAction('[Users List] Get Users');
export const getUsersSuccess = createAction('[User List] Get Users Success');

export const loadUsers = createAction('[User List] Load Users');
export const loadUsersSuccess = createAction(
  '[User List] Load Users Success',
  props<{ users: IUser[] }>()
);

export const addUser = createAction(
  '[User List] Add User',
  props<{ user: IUser }>()
);
export const addUserSuccess = createAction(
  '[User List] Add User Success',
  props<{ user: IUser }>()
);
