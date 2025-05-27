import { useState, useEffect } from "react";
import "./App.css";

import StarRating from "./StarRating";
import { use } from "react";

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr) => arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
const KEY = "1ea813d2";
const MovieName = "dune";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  function handleSelectMovie(id) {
    setSelectedId((prevId) => (prevId === id ? null : id));
  }

  function handleOnClose() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${MovieName}`
        );

        if (!res.ok) {
          throw new Error("Something went wrong while fetching the data");
        }

        const data = await res.json();

        if (data.Response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <>
      <NavBar>
        <Logo />
        <Search />
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
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList watched={watched} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

function Loader() {
  return <span class="loader"></span>;
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
      <h1>usePopcorn</h1>
    </div>
  );
}

function Search() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.trim() === "") return;
  }, [query]);

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
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
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
  const avgImdbRating =
    watched.length > 0 ? average(watched.map((movie) => movie.imdbRating)) : 0;
  const avgUserRating =
    watched.length > 0 ? average(watched.map((movie) => movie.userRating)) : 0;
  const avgRuntime =
    watched.length > 0 ? average(watched.map((movie) => movie.runtime)) : 0;

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span> {watched.length} movies
        </p>
        <p>
          <span>⭐️</span> {avgImdbRating.toFixed(1)}
        </p>
        <p>
          <span>🌟</span> {avgUserRating.toFixed(1)}
        </p>
        <p>
          <span>⏳</span> {avgRuntime.toFixed(0)} min
        </p>
      </div>
    </div>
  );
}

function WatchedMoviesList({ watched }) {
  return (
    <ul className="list">
      {watched.length > 0 ? (
        watched.map((movie) => (
          <WatchedMovie
            key={movie.imdbID}
            poster={movie.poster}
            title={movie.title}
            imdbRating={movie.imdbRating}
            userRating={movie.userRating}
            runtime={movie.runtime}
          />
        ))
      ) : (
        <p>No movies added yet!</p>
      )}
    </ul>
  );
}

function MovieDetails({ selectedId, onCloseMovie, onAddWatched }) {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [userRating, setUserRating] = useState("");

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime = "",
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
      runtime: runtime.split(" ")[0], // Extract the number of minutes
      imdbRating: Number(imdbRating),
      userRating: Number(userRating),
    };
    onAddWatched(newWatchedMovie);
    onCloseMovie(); // Close the details view after adding
  }

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
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
              <StarRating
                size={24}
                maxRating={10}
                onSetRating={setUserRating}
              />
              <button className="btn-add" onClick={handleAdd}>
                +Add to List
              </button>
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed By {director}</p>
          </section>
        </>
      )}
    </div>
  );
}

function WatchedMovie({ poster, title, imdbRating, userRating, runtime }) {
  return (
    <li>
      <img src={poster} alt={`${title} poster`} />
      <h3>{title}</h3>
      <div>
        <p>
          <span>⭐️</span> {imdbRating}
        </p>
        <p>
          <span>🌟</span> {userRating}
        </p>
        <p>
          <span>⏳</span> {runtime} min
        </p>
      </div>
    </li>
  );
}
