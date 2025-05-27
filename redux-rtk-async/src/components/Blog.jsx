import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <h1> Book Finder App – Project Blog</h1>

      <p>
        This project is a React-based web application that allows users to
        search for books using the Open Library API, manage a list of favorite
        books, and explore search results dynamically.
      </p>

      <h2> Technologies Used</h2>
      <ul>
        <li>React – for building a component-based UI</li>
        <li>Redux Toolkit – for simplified and efficient state management</li>
        <li>React Redux – to connect React components with Redux store</li>
        <li>React Router – for client-side routing and navigation</li>
        <li>Open Library API – to fetch real book data from a public API</li>
        <li>CSS – for styling and layout</li>
      </ul>

      <h2> How Redux Works in This App</h2>
      <p>
        Redux Toolkit is used to maintain a global state for the app, which
        means all components can access and update the same centralized data
        store. This approach ensures consistent data across the app and helps
        manage complex state logic cleanly.
      </p>

      <p>The app contains two main slices of state:</p>
      <ul>
        <li>
          <strong>Books slice:</strong> Stores the current list of books fetched
          from the Open Library API based on the user’s search query, as well as
          the loading and error states.
        </li>
        <li>
          <strong>Favorites slice:</strong> Stores the list of books the user
          has marked as favorites.
        </li>
      </ul>

      <h3>Dispatching Actions</h3>
      <p>
        Components use the <code>dispatch</code> function (from{" "}
        <code>useDispatch()</code>) to send actions to the Redux store. Actions
        describe what happened in the app — for example, fetching new books or
        adding a book to favorites.
      </p>

      <p>When an action is dispatched:</p>
      <ol>
        <li>
          The Redux store sends this action to the appropriate reducer(s).
        </li>
        <li>
          Reducers update the state immutably based on the action type and
          payload.
        </li>
        <li>
          The updated state is made available to all subscribed components.
        </li>
      </ol>

      <h3>Async Logic with createAsyncThunk</h3>
      <p>
        For asynchronous operations like fetching data from the Open Library
        API,
        <code>createAsyncThunk</code> is used. This utility automatically
        dispatches pending, fulfilled, and rejected actions to handle loading
        states and errors gracefully.
      </p>

      <h3>Connecting State to Components</h3>
      <p>
        Components use <code>useSelector</code> to read the current Redux state.
        For example, <code>BookList</code> reads the list of fetched books, and
        <code>Favorites</code> reads the list of favorite books.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>Search books by keyword using the Open Library API</li>
        <li>Display the top 10 search results</li>
        <li>Add books to a favorites list, which is globally managed</li>
        <li>Remove books from the favorites list</li>
        <li>Navigate between the home screen and a detailed blog page</li>
      </ul>

      <h2>🛠 What Was Implemented</h2>
      <ul>
        <li>
          Set up Redux slices (<code>bookSlice.js</code> and{" "}
          <code>favoriteSlice.js</code>) to manage API data and favorites
        </li>
        <li>
          Created reusable React components: <code>BookSearch</code>,{" "}
          <code>BookList</code>, and <code>Favorites</code>
        </li>
        <li>
          Configured the Redux store and wrapped the app with{" "}
          <code>Provider</code>
        </li>
        <li>
          Implemented client-side routing with React Router to navigate between
          pages
        </li>
        <li>Added CSS styling for a clean, user-friendly interface</li>
      </ul>

      <Link to="/">
        <button style={{ marginTop: "20px", padding: "10px 20px" }}>
          Back to Home
        </button>
      </Link>
    </div>
  );
}
