import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Blog = () => {
  return (
    <div className="simple-blog">
      <Link to="/" className="simple-back-link">
        ← Back to Todo App
      </Link>
      <h2>Behind the Scenes of the Redux Todo App</h2>
      <p>Working of this ToDo application.</p>

      <h3>Key Redux Concepts in Action</h3>
      <p>
        Store: Built with <code>configureStore()</code>, the store is the heart
        of our app's state.
      </p>
      <p>
        Actions & Reducers: Created with <code>createSlice()</code>, they
        simplify how state updates work.
      </p>
      <p>Dispatch: Triggers changes in the state by sending out actions.</p>
      <p>useSelector: Lets components access and display the current state.</p>

      <h3>What is a Slice?</h3>
      <p>
        A slice is a piece of Redux state and the logic to handle it, created
        with <code>createSlice()</code>.
      </p>
      <p>
        In this app, we use a <code>todoSlice</code> that includes:
      </p>
      <p>
        addTodo: Adds a new task using a unique ID from <code>nanoid()</code>.
      </p>
      <p>removeTodo: Deletes a task by its ID.</p>

      <h3>How It All Works Together</h3>
      <p>1. You type a task into the input field.</p>
      <p>
        2. Clicking "Add" dispatches an <code>addTodo</code> action.
      </p>
      <p>3. The reducer updates the state to include your new task.</p>
      <p>4. The Todos component updates to reflect the new list.</p>
      <p>
        5. Clicking "X" triggers <code>removeTodo</code> to delete the task.
      </p>
    </div>
  );
};

export default Blog;
