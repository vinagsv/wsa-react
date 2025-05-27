import React from "react";

export default function Blog() {
  return (
    <div className="blog-container">
      <h1>Understanding the Stepper Component</h1>
      <p>
        This small React component is a simple stepper that allows users to
        navigate through 3 steps, each showing a different message:
      </p>
      <ul>
        <li>Step 1: Learn React ⚛️</li>
        <li>Step 2: Apply for jobs 💼</li>
        <li>Step 3: Invest your new income 🤑</li>
      </ul>
      <p>
        The state <code>step</code> keeps track of the current step, and the
        <code>isOpen</code> state controls whether the stepper is visible or
        hidden.
      </p>
      <p>
        Buttons labeled "Previous" and "Next" let the user move between steps,
        but they are disabled when reaching the first or last step to prevent
        invalid navigation.
      </p>
      <p>
        The "×" button toggles the visibility of the stepper by updating the{" "}
        <code>isOpen</code> state.
      </p>
      <p>
        Each step number is visually highlighted when active using conditional
        CSS classes.
      </p>
      <p>
        Overall, this component demonstrates basic React hooks usage with{" "}
        <code>useState</code>, conditional rendering, and inline styling.
      </p>
    </div>
  );
}
