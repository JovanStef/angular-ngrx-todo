import { ITodo } from '../todos/models/todo.model';
import { IUser } from '../users/models/users.model';

export interface appState {
  todos: ITodo[];
  users: IUser[];
  dateModified: Date;
}

export const initalState: appState = {
  todos: [],
  users: [],
  dateModified: new Date(),
};
