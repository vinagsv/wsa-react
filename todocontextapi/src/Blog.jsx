import React from "react";

export default function Blog() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Todo App Using Context API</h1>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          This project is a simple Todo application built using React and the
          Context API. It demonstrates how to manage global state in a
          component-based architecture without relying on third-party libraries
          like Redux. The application also integrates localStorage to persist
          todos across browser sessions.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">2. Context Setup</h2>
        <p>
          The Context API is used to create a global store for todos and actions
          like add, update, delete, and toggle. This is done in the
          `TodoContext.js` file using `createContext` and a custom hook
          `useTodo` to consume the context values easily in any component.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">3. Main App Logic</h2>
        <p>
          The `App.jsx` component holds the actual todo state using the
          `useState` hook. The todo list is initialized using `localStorage`,
          and every time the todos are updated, they are saved back to
          `localStorage` using the `useEffect` hook.
        </p>
        <p>
          All functions for managing todos are defined here and passed to the
          context provider. These include:
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>addTodo:</strong> Adds a new todo with a unique
              timestamp-based ID
            </li>
            <li>
              <strong>updateTodo:</strong> Updates the title of an existing todo
            </li>
            <li>
              <strong>deleteTodo:</strong> Removes a todo from the list
            </li>
            <li>
              <strong>toggleComplete:</strong> Toggles the completion status of
              a todo
            </li>
          </ul>
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">4. TodoItem Component</h2>
        <p>
          The `TodoItem.jsx` component represents each todo in the list. It uses
          local state to toggle whether the todo title is editable. Based on the
          `completed` status, it shows a green background and disables editing
          if the todo is marked as complete.
        </p>
        <p>
          There are three actions available in each todo:
          <ul className="list-disc list-inside ml-4">
            <li>A checkbox to toggle completion</li>
            <li>An edit button to enable editing the title</li>
            <li>A delete button to remove the todo</li>
          </ul>
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">
          5. Component Communication
        </h2>
        <p>
          All components access the global todo state and functions through the
          `useTodo` hook provided by the context. This removes the need to pass
          props deeply and makes the code more modular and readable.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">6. Final Thoughts</h2>
        <p>
          This project is an excellent demonstration of how React’s Context API
          can be used for global state management in a clean and scalable way.
          It avoids prop-drilling and keeps the application structure
          well-organized.
        </p>
      </section>
    </div>
  );
}
