import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button className="blog-button" onClick={() => navigate("/")}>
        Home
      </button>

      <div className="blog-container">
        <h1 className="blog-title">
          Building an Interactive FAQ Accordion in React
        </h1>
        <div className="blog-content">
          <p>
            In this mini project, we built a Frequently Asked Questions (FAQ)
            section using React. The idea was to display a list of common
            questions, and when a user clicks on a question, its answer should
            appear. Clicking it again hides the answer, and clicking on another
            question collapses the current one and expands the new one.
          </p>

          <h2>1. Component Structure</h2>
          <p>
            We used a single functional component named <code>Accordion</code>.
            This component holds the logic for toggling each FAQ item open or
            closed. We used React's <code>useState</code> hook to track which
            item is currently open.
          </p>

          <h2>2. FAQ Data</h2>
          <p>
            The list of FAQs was stored in a constant array named{" "}
            <code>faqs</code>. Each item in the array is an object with a{" "}
            <code>title</code> and <code>text</code> property. This makes it
            easy to scale or update the FAQs without changing any structural
            logic.
          </p>

          <h2>3. Toggle Logic</h2>
          <p>
            The key logic lies in the <code>toggleAccordion</code> function.
            When an item is clicked, we check if it is already open. If it is,
            we collapse it by setting the <code>openIndex</code> state to{" "}
            <code>null</code>. If it is not, we set <code>openIndex</code> to
            the index of the clicked item, which causes that item to expand.
          </p>

          <h2>4. Conditional Rendering</h2>
          <p>
            We conditionally rendered the answer content using a check:{" "}
            <code>{`openIndex === index`}</code>. If true, the answer paragraph
            is shown; otherwise, it's hidden. The icon ("+" or "-") also
            switches based on this condition to indicate the current state.
          </p>

          <h2>5. Styling</h2>
          <p>
            Styling was handled using a separate <code>index.css</code> file.
            The styles included layout formatting for the accordion, transitions
            for a smooth open/close experience, and visual cues like icons and
            numbering for clarity.
          </p>

          <h2>6. Navigation</h2>
          <p>
            We added a button at the top right corner labeled "Blog". When
            clicked, this button takes the user to this blog page. This helps
            users understand the purpose and implementation of the project in a
            clean, navigable way. The navigation was handled using React
            Router's <code>useNavigate</code> hook.
          </p>

          <h2>Conclusion</h2>
          <p>
            This mini project is a great introduction to building interactive UI
            components in React. It covers key concepts such as state
            management, conditional rendering, user interaction, and dynamic UI
            updates. It's simple yet effective for learning how to think in
            React and build reusable components.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
