// import { useEffect, useState } from "react";
// import { TodoProvider } from "./contexts/TodoContext";
// import TodoForm from "./components/TodoForm";
// import TodoItem from "./components/TodoItem";

// function App() {
//   // make sure to return the function,rather than calling in useState and also callback function used for initialization should be pure functions,means it should not have any parameters
//   const [todos, setTodos] = useState(() => {
//     const storedValue = JSON.parse(localStorage.getItem("todos"));
//     return storedValue || [];
//   });

//   const addTodo = (newTodo) => {
//     setTodos((prevTodos) => [
//       ...prevTodos,
//       {
//         id: Date.now(),
//         ...newTodo,
//       },
//     ]);
//   };

//   const updateTodo = (id, updatedTodo) => {
//     setTodos((prev) =>
//       prev.map((todo) =>
//         todo.id === id ? { ...todo, todo: updatedTodo } : todo
//       )
//     );
//   };

//   const deleteTodo = (id) => {
//     setTodos((prev) => prev.filter((todo) => todo.id !== id));
//   };

//   const toggleComplete = (id) => {
//     setTodos((prev) =>
//       prev.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   return (
//     <TodoProvider
//       value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
//     >
//       <div>
//         <div>
//           <h1>Todo with Context API</h1>
//           <div>
//             {/* Todo form goes here */}
//             <TodoForm />
//             <div>
//               {/* Loop and add todo items here */}
//               {todos.map((todo) => (
//                 <TodoItem key={todo.id} todo={todo} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </TodoProvider>
//   );
// }

// export default App;

// =======================
import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import Blog from "./Blog";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [todos, setTodos] = useState(() => {
    const storedValue = JSON.parse(localStorage.getItem("todos"));
    return storedValue || [];
  });

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Date.now(),
        ...newTodo,
      },
    ]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, todo: updatedTodo } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <Router>
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Todo with Context API</h1>
            <Link
              to="/blog"
              className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              View Blog
            </Link>
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <TodoForm />
                  <div className="space-y-2 mt-4">
                    {todos.map((todo) => (
                      <TodoItem key={todo.id} todo={todo} />
                    ))}
                  </div>
                </>
              }
            />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </Router>
    </TodoProvider>
  );
}

export default App;
