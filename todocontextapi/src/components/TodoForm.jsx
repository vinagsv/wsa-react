import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

export default function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}
