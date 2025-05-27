import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

export const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  return (
    <>
      <div>Todo</div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
        </li>
      ))}
    </>
  );
};
