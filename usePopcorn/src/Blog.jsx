export default function Blog() {
  return (
    <div className="blog-container">
      <article style={{ padding: 20, maxWidth: 800, margin: "auto" }}>
        <h1>Building a Movie Watchlist with React and the OMDb API</h1>
        <p>
          This mini project demonstrates a React app that integrates with the
          OMDb API to build a movie watchlist application with rich features
          like searching movies, viewing details, rating, and managing a watched
          list.
        </p>

        <h2>Key Features & Implementation Details</h2>

        <h3>1. Search & Fetch Movies with Debouncing & AbortController</h3>
        <p>
          The app listens to user input for movie searches. To avoid excessive
          API calls, it only triggers fetching when the query length is 3 or
          more characters. We use
          <code>AbortController</code> to cancel previous fetch requests when a
          new query is typed, preventing race conditions and unwanted UI
          flickering.
        </p>

        <h3>2. Detailed Movie View & Dynamic Document Title</h3>
        <p>
          Upon selecting a movie from the list, a detailed view is fetched
          asynchronously. React's
          <code>useEffect</code> updates the document title to the movie's
          title, improving user experience and accessibility.
        </p>

        <h3>3. Watched Movies List with Ratings & Summary</h3>
        <p>
          Users can rate movies on a 10-point scale before adding them to their
          watched list. The app calculates average IMDb rating, user rating, and
          runtime of watched movies using an
          <code>average</code> utility function. Watched movies can be deleted
          individually.
        </p>

        <h3>4. Clean & Responsive UI Components</h3>
        <p>
          Components such as <code>Loader</code>, <code>ErrorMessage</code>,{" "}
          <code>Box</code>, and toggles enhance UI feedback and usability. The
          code uses semantic HTML and React best practices for component
          decomposition and state management.
        </p>

        <h2>Potential Improvements</h2>
        <ul>
          <li>Implement pagination for search results.</li>
          <li>Add persistent storage using localStorage or IndexedDB.</li>
          <li>Enhance error handling with retry mechanisms.</li>
          <li>Improve UI with CSS modules or styled-components.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          This project is a great example of combining React hooks, API
          integration, and state management to build a dynamic and interactive
          user experience with clean code and functional components.
        </p>
      </article>
    </div>
  );
}
