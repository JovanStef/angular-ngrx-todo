import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoHelpers {
  addTodo(todo, todoArray) {
    todo.value.id = todoArray.length + 1;
    todoArray.push(todo.value);
  }

  deleteTodo(todoArray, todo): ITodo[] {
    return todoArray.filter((elem) => {
      return elem.description !== todo.description;
    });
  }

  formatTodo(todo, todoArray): ITodo {
    let id = todoArray.length == 0 ? 1 : todoArray[todoArray.length - 1].id + 1;
    return {
      id: id,
      ...todo,
      isCompleted: false,
    };
  }

  logHelpers = (item?) => {
    console.log(item, 'item');
    return item.type;
  };
}
