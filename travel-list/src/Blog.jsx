export default function Blog() {
  return (
    <div
      style={{ padding: "4rem", fontFamily: "Quicksand", lineHeight: "1.8" }}
    >
      <h2>Project: Packing List App - Technical Overview</h2>

      <h2>1. App Structure</h2>
      <p>
        The entire app is built using React. It uses functional components and
        React Hooks such as
        <code> useState </code> and <code> useEffect </code> (if extended). It
        includes routing using React Router DOM to navigate between the main
        packing app and the Blog page.
      </p>

      <h2>
        2. <code>App.jsx</code>
      </h2>
      <p>
        This is the root component. It sets up React Router with two routes: one
        for the main packing list app and another for the blog page. The packing
        list app is nested inside the
        <code>Home</code> component, which manages all state and behavior for
        the items list using the <code>useState</code> hook.
      </p>

      <h2>
        3. <code>Logo.jsx</code>
      </h2>
      <p>
        A simple presentational component that renders the application’s main
        heading using an H1 tag. Styled using the main CSS to appear large and
        bold.
      </p>

      <h2>
        4. <code>Form.jsx</code>
      </h2>
      <p>
        The form allows users to add items to the list. It uses internal state
        with <code>useState</code> to track the item description and quantity.
        On submit, it prevents default form behavior and calls the{" "}
        <code>onAddItems</code> function passed as a prop, constructing a new
        item object with:
        <ul>
          <li>
            <code>id</code> generated using <code>Date.now()</code>
          </li>
          <li>
            <code>description</code> from the input field
          </li>
          <li>
            <code>quantity</code> from the select dropdown
          </li>
          <li>
            <code>packed</code> defaulting to false
          </li>
        </ul>
        Then it clears the form fields.
      </p>

      <h2>
        5. <code>PackingList.jsx</code>
      </h2>
      <p>
        Receives the list of items and provides sorting functionality. It
        supports 3 sort modes:
        <ul>
          <li>
            <strong>input:</strong> default order
          </li>
          <li>
            <strong>description:</strong> alphabetical sort
          </li>
          <li>
            <strong>packed:</strong> by packed status
          </li>
        </ul>
        It maps each item to an <code>Item</code> component. It also includes a
        Clear Items button that confirms with the user before deleting all
        items.
      </p>

      <h2>
        6. <code>Item.jsx</code>
      </h2>
      <p>
        Displays a single list item with:
        <ul>
          <li>A checkbox to toggle packed status</li>
          <li>Text indicating quantity and description</li>
          <li>A delete ❌ icon to remove the item</li>
        </ul>
        When the item is marked as packed, a line-through style is applied via
        inline styles.
      </p>

      <h2>
        7. <code>Stats.jsx</code>
      </h2>
      <p>
        Displays a summary of the packing list. It calculates:
        <ul>
          <li>Total number of items</li>
          <li>Number of packed items</li>
          <li>Percentage packed</li>
        </ul>
        It conditionally renders a message if the list is empty, and otherwise
        shows a progress message or a "ready to go" message if packing is 100%
        complete.
      </p>

      <h2>
        8. <code>index.css</code>
      </h2>
      <p>
        Handles all styling. It uses:
        <ul>
          <li>CSS Grid layout for the overall app container</li>
          <li>Custom fonts from Google Fonts</li>
          <li>Modern button and form input styling</li>
          <li>
            Responsive list display using CSS Grid with <code>auto-fit</code>{" "}
            and <code>minmax</code>
          </li>
        </ul>
        Each section of the app (form, list, stats) has its own distinctive
        styling.
      </p>

      <h2>
        9. <code>main.jsx</code>
      </h2>
      <p>
        Entry point of the application. Uses <code>createRoot</code> from{" "}
        <code>react-dom/client</code> to render the <code>&lt;App /&gt;</code>{" "}
        component wrapped in <code>&lt;StrictMode /&gt;</code> into the DOM.
      </p>
    </div>
  );
}
