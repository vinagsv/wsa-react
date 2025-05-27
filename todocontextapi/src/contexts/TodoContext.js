import { createContext, useContext } from "react";

/*
{
id:1,
todo:"learn context Api"
completed:false
},

add Todo(newTodo)
updateTodo(id,todo)
deleteTodo(id)
toggleComplete(id)
*/

export const TodoContext = createContext({
  todos: [],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleComplete: () => {},
});

//custom hook
export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
