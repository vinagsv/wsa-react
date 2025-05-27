import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Blog = () => {
  return (
    <div className="blog-container">
      <Link to="/" className="back-link">
        ← Back to Duck Generator
      </Link>
      <h1 className="blog-title">How the Random Duck Generator Works</h1>
      <article className="blog-content">
        <h2>Introduction</h2>
        <p>
          The Random Duck Generator is a fun, simple React application that
          fetches and displays random duck images from the{" "}
          <a href="https://random-d.uk/">random-d.uk</a> API. With a single
          button click, users can generate a new duck image, bringing a bit of
          quacky joy to their day!
        </p>

        <h2>Project Overview</h2>
        <p>
          This mini-project demonstrates core React concepts like state
          management, asynchronous API calls, and component rendering. It uses
          modern JavaScript features and a proxy API to handle CORS issues,
          ensuring a smooth user experience.
        </p>

        <h2>How It Works</h2>
        <ol>
          <li>
            <strong>Component Setup</strong>: The main component,{" "}
            <code>DuckGenerator</code>, is a functional React component that
            uses the <code>useState</code> hook to manage the URL of the duck
            image.
          </li>
          <li>
            <strong>API Call</strong>: When the user clicks the "Generate Random
            Duck" button, the <code>fetchDuck</code> function is triggered. It
            makes an API request to{" "}
            <code>
              https://api.allorigins.win/get?url=https://random-d.uk/api/random
            </code>
            .
          </li>
          <li>
            <strong>Data Processing</strong>: The response is parsed from the
            <code>contents</code> field to extract the image URL.
          </li>
          <li>
            <strong>State Update</strong>: The extracted URL is stored in state
            to trigger re-rendering.
          </li>
          <li>
            <strong>Rendering</strong>: The <code>&lt;img&gt;</code> tag
            displays the image when available.
          </li>
        </ol>

        <h2>Technologies Used</h2>
        <ul>
          <li>
            <strong>React</strong>
          </li>
          <li>
            <strong>JavaScript (Fetch API)</strong>
          </li>
          <li>
            <strong>AllOrigins Proxy</strong>
          </li>
          <li>
            <strong>Custom CSS</strong>
          </li>
        </ul>

        <h2>Challenges and Solutions</h2>
        <p>
          The main challenge was CORS. Using AllOrigins as a proxy solved this
          by wrapping the API response.
        </p>

        <h2>Future Improvements</h2>
        <p>Add error handling, loading states, and favorite-saving features.</p>

        <h2>Conclusion</h2>
        <p>
          The Random Duck Generator is a lighthearted way to practice API
          integration in React.
        </p>
      </article>
    </div>
  );
};

export default Blog;
