export const addTodo = (todo, todoArray): any => {
  todo.value.id = todoArray.length + 1;
  todoArray.push(todo.value);
};

export const removeTodo = (todo, todoArray) => {
  return todoArray.filter((elem) => {
    return elem.description !== todo.description;
  });
};
