// import { useState, useEffect } from "react";
// import StarRating from "./StarRating";

// const average = (arr) =>
//   arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
// let KEY = "1ea813d2";
// let movieName = "dune";

// export default function App() {
//   const [movies, setMovies] = useState([]);
//   const [watched, setWatched] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [selectedId, setSelectedId] = useState(null);
//   const [query, setQuery] = useState("");

//   function handleSelectMovie(id) {
//     setSelectedId((prevId) => (prevId === id ? null : id));
//   }

//   function handleOnClose() {
//     setSelectedId(null);
//   }

//   function handleAddWatched(movie) {
//     setWatched((Watched) => [...Watched, movie]);
//   }

//   function handleDeleteWatched(id) {
//     setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
//   }

//   useEffect(
//     function () {
//       const controller = new AbortController(); //create controller

//       async function fetchMovies() {
//         try {
//           setLoading(true);
//           setError("");

//           const res = await fetch(
//             `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
//             { signal: controller.signal }
//           );

//           if (!res.ok) {
//             throw new Error("Something went wrong while fetching the data");
//           }

//           const data = await res.json();
//           console.log(data);

//           if (data.Response === "False") throw new Error("Movie not found");

//           setMovies(data.Search);
//           console.log(data);
//         } catch (error) {
//           if (error.name !== "AbortError") {
//             console.log(error);
//             setError(error.message);
//           }
//         } finally {
//           setLoading(false);
//         }
//       }
//       //getting rid of the race condition
//       if (query.length < 3) {
//         setMovies([]);
//         setError("");
//         return;
//       }

//       fetchMovies();

//       //cleanup function to abort previous fetch
//       return () => {
//         controller.abort();
//       };
//     },
//     [query]
//   );

//   return (
//     <>
//       <NavBar>
//         <Logo />
//         <Search query={query} setQuery={setQuery} />
//         <NumResults movies={movies} />
//       </NavBar>
//       <Main>
//         <Box>
//           {loading && <Loader />}
//           {!loading && !error && (
//             <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
//           )}
//           {error && <ErrorMessage message={error} />}
//         </Box>
//         <Box>
//           {selectedId ? (
//             <MovieDetails
//               selectedId={selectedId}
//               onCloseMovie={handleOnClose}
//               onAddWatched={handleAddWatched}
//               watched={watched}
//             />
//           ) : (
//             <>
//               <WatchedSummary watched={watched} />
//               <WatchedMoviesList
//                 watched={watched}
//                 // onDeletewatched
//               />
//             </>
//           )}
//         </Box>
//       </Main>
//     </>
//   );
// }

// function Loader() {
//   return <span className="loader"></span>;
// }

// function ErrorMessage({ message }) {
//   return (
//     <p className="error">
//       <span>🚫</span> {message}
//     </p>
//   );
// }

// function NavBar({ children }) {
//   return <nav className="nav-bar">{children}</nav>;
// }

// function Logo() {
//   return (
//     <div className="logo">
//       <span role="img" aria-label="popcorn">
//         🍿
//       </span>
//       <h1>usePopcorn</h1>
//     </div>
//   );
// }

// function Search({ query, setQuery }) {
//   return (
//     <input
//       className="search"
//       type="text"
//       placeholder="Search movies..."
//       value={query}
//       onChange={(e) => setQuery(e.target.value)}
//     />
//   );
// }

// function NumResults({ movies }) {
//   return (
//     <p className="num-results">
//       Found <strong>{movies.length}</strong> results
//     </p>
//   );
// }

// function Main({ children }) {
//   return <main className="main">{children}</main>;
// }

// function Box({ children }) {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div className="box">
//       <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
//         {isOpen ? "–" : "+"}
//       </button>
//       {isOpen && children}
//     </div>
//   );
// }

// function MovieList({ movies, onSelectMovie }) {
//   return (
//     <ul className="list">
//       {movies?.map((movie) => (
//         <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
//       ))}
//     </ul>
//   );
// }

// function Movie({ movie, onSelectMovie }) {
//   return (
//     <li onClick={() => onSelectMovie(movie.imdbID)}>
//       <img src={movie.Poster} alt={`${movie.Title} poster`} />
//       <h3>{movie.Title}</h3>
//       <div>
//         <p>
//           <span>📅</span> {movie.Year}
//         </p>
//       </div>
//     </li>
//   );
// }

// function WatchedSummary({ watched }) {
//   const avgImdbRating =
//     watched.length > 0 ? average(watched.map((movie) => movie.imdbRating)) : 0;
//   const avgUserRating =
//     watched.length > 0
//       ? average(watched.map((movie) => movie.userRating || 0))
//       : 0;
//   const avgRuntime =
//     watched.length > 0
//       ? average(watched.map((movie) => Number(movie.runtime)))
//       : 0;
//   return (
//     <div className="summary">
//       <h2>Movies you watched</h2>
//       <div>
//         <p>
//           <span>#️⃣</span> {watched.length} movies
//         </p>
//         <p>
//           <span>⭐️</span> {avgImdbRating.toFixed(2)}
//         </p>
//         <p>
//           <span>🌟</span> {avgUserRating.toFixed(2)}
//         </p>
//         <p>
//           <span>⏳</span> {avgRuntime.toFixed(2)} min
//         </p>
//       </div>
//     </div>
//   );
// }

// function MovieDetails({ selectedId, onCloseMovie, onAddWatched, watched }) {
//   const [movie, setMovie] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [userRating, setUserRating] = useState("");

//   const isWatched = watched.some((movie) => movie.imdbID === selectedId);

//   const watchedMovie = watched.find((movie) => movie.imdbID === selectedId);
//   const watchedUserRating = watchedMovie ? watchedMovie.userRating : null;

//   const {
//     Title: title,
//     Year: year,
//     Poster: poster,
//     Runtime: runtime,
//     imdbRating,
//     Plot: plot,
//     Released: released,
//     Actors: actors,
//     Director: director,
//     Genre: genre,
//   } = movie;

//   function handleAdd() {
//     const newWatchedMovie = {
//       imdbID: selectedId,
//       title,
//       year,
//       poster,
//       runtime: runtime ? runtime.split(" ")[0] : "0",
//       imdbRating: Number(imdbRating),
//       userRating,
//     };
//     onAddWatched(newWatchedMovie);
//     onCloseMovie();
//   }

//   useEffect(() => {
//     async function getMovieDetails() {
//       try {
//         setLoading(true);
//         const res = await fetch(
//           `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
//         );
//         if (!res.ok) throw new Error("Failed to fetch movie details");
//         const data = await res.json();
//         setMovie(data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     if (selectedId) getMovieDetails();
//   }, [selectedId]);

//   //movie Title
//   useEffect(() => {
//     if (!title) return;
//     document.title = `Movie | ${title}`;
//     console.log("setup -func");

//     //cleanup
//     return function () {
//       document.title = "usePopcorn";
//       console.log("cleanup func,ran");
//     };
//   }, [title]);

//   return (
//     <div className="details">
//       {loading ? (
//         <Loader />
//       ) : (
//         <>
//           <header>
//             <button className="btn-back" onClick={onCloseMovie}>
//               &larr;
//             </button>
//             <img src={poster} alt={`Poster of ${title}`} />
//             <div className="details-overview">
//               <h2>{title}</h2>
//               <p>
//                 {released} &bull; {runtime}
//               </p>
//               <p>{genre}</p>
//               <p>
//                 <span>🌟</span> {imdbRating}
//               </p>
//             </div>
//           </header>
//           <section>
//             <div className="rating">
//               {!isWatched ? (
//                 <>
//                   <StarRating
//                     size={24}
//                     maxRating={10}
//                     onSetRating={(rating) => setUserRating(rating)}
//                   />
//                   {userRating > 0 && (
//                     <button className="btn-add" onClick={handleAdd}>
//                       +Add to List
//                     </button>
//                   )}
//                 </>
//               ) : (
//                 <p>
//                   You have watched this movie. User rating: {watchedUserRating}
//                 </p>
//               )}
//             </div>
//             <p>
//               <em>{plot}</em>
//             </p>
//             <p>Starring {actors}</p>
//             <p>Directed By {director}</p>
//           </section>
//         </>
//       )}
//     </div>
//   );
// }

// function WatchedMoviesList({ watched, onDeleteWatched }) {
//   return (
//     <ul className="list">
//       {watched.map((movie) => (
//         <WatchedMovie
//           movie={movie}
//           key={movie.imdbID}
//           onDeleteWatched={onDeleteWatched}
//         />
//       ))}
//     </ul>
//   );
// }

// function WatchedMovie({ movie, onDeleteWatched }) {
//   return (
//     <li key={movie.imdbID}>
//       <img src={movie.poster} alt={`${movie.title} poster`} />
//       <h3>{movie.title}</h3>
//       <div>
//         <p>
//           <span>⭐️</span> {movie.imdbRating}
//         </p>
//         <p>
//           <span>🌟</span> {movie.userRating}
//         </p>
//         <p>
//           <span>⏳</span> {movie.runtime} min
//         </p>
//         <button
//           className="btn-delete"
//           onClick={() => {
//             onDeleteWatched(movie.imdbID);
//           }}
//         >
//           X
//         </button>
//       </div>
//     </li>
//   );
// }

//=======================================
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import StarRating from "./StarRating";
import Blog from "./Blog";

let KEY = "1ea813d2";
const average = (arr) => arr.reduce((acc, cur) => acc + cur / arr.length, 0);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

function Home() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error("Something went wrong");
        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");
        setMovies(data.Search);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchMovies();
    return () => controller.abort();
  }, [query]);

  function handleSelectMovie(id) {
    setSelectedId((prevId) => (prevId === id ? null : id));
  }

  function handleOnClose() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((m) => m.imdbID !== id));
  }

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {loading && <Loader />}
          {!loading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleOnClose}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>

      <Link
        to="/blog"
        className="btn-blog"
        style={{
          textDecoration: "none",
        }}
      >
        Blog
      </Link>
    </>
  );
}

function Loader() {
  return <span className="loader"></span>;
}

function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>🚫</span> {message}
    </p>
  );
}

function NavBar({ children }) {
  return <nav className="nav-bar">{children}</nav>;
}

function Logo() {
  return (
    <div className="logo">
      <span role="img" aria-label="popcorn">
        🍿
      </span>
      <h1>use popcorn</h1>
    </div>
  );
}

function Search({ query, setQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((o) => !o)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}

function Movie({ movie, onSelectMovie }) {
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>📅</span> {movie.Year}
        </p>
      </div>
    </li>
  );
}

function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((m) => m.imdbRating)) || 0;
  const avgUserRating = average(watched.map((m) => m.userRating || 0)) || 0;
  const avgRuntime = average(watched.map((m) => Number(m.runtime))) || 0;
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span> {watched.length} movies
        </p>
        <p>
          <span>⭐️</span> {avgImdbRating.toFixed(2)}
        </p>
        <p>
          <span>🌟</span> {avgUserRating.toFixed(2)}
        </p>
        <p>
          <span>⏳</span> {avgRuntime.toFixed(2)} min
        </p>
      </div>
    </div>
  );
}

function MovieDetails({ selectedId, onCloseMovie, onAddWatched, watched }) {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const isWatched = watched.some((movie) => movie.imdbID === selectedId);
  const watchedMovie = watched.find((movie) => movie.imdbID === selectedId);
  const watchedUserRating = watchedMovie?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      runtime: runtime?.split(" ")[0] || "0",
      imdbRating: Number(imdbRating),
      userRating,
    };
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    if (selectedId) getMovieDetails();
  }, [selectedId]);

  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`;
    return () => {
      document.title = "usePopcorn";
    };
  }, [title]);

  return (
    <div className="details">
      {loading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${title}`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>🌟</span> {imdbRating}
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    size={24}
                    maxRating={10}
                    onSetRating={(r) => setUserRating(r)}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      +Add to List
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You have watched this movie. User rating: {watchedUserRating}
                </p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}

function WatchedMoviesList({ watched, onDeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
}

function WatchedMovie({ movie, onDeleteWatched }) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span> {movie.imdbRating}
        </p>
        <p>
          <span>🌟</span> {movie.userRating}
        </p>
        <p>
          <span>⏳</span> {movie.runtime} min
        </p>
        <button
          className="btn-delete"
          onClick={() => onDeleteWatched(movie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
}
