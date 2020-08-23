import { createReducer, on, Action } from '@ngrx/store';
import { initalState, appState } from '../appState';
import {
  getUsers,
  loadUsers,
  loadUsersSuccess,
  addUserSuccess,
  addUser,
} from './users.actions';
const _userReducer = createReducer(
  initalState,
  on(getUsers, (state) => state),
  on(loadUsers, (state) => state),
  on(loadUsersSuccess, (state, users) => {
    // console.log(users);
    return Object.assign({}, state, {
      users: users.users,
    });
  }),
  on(addUser, (state) => state),
  on(addUserSuccess, (state, user) => {
    return Object.assign({}, state, {
      users: [...state.users, user],
    });
  })
);

export function userReducer(state: appState | undefined, action: Action) {
  return _userReducer(state, action);
}
