import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../redux/favoriteSlice";

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  return (
    <div className="favorites-section">
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorite books yet.</p>
      ) : (
        favorites.map((book) => (
          <div key={book.key} className="favorite-item">
            <h3>{book.title}</h3>
            <p>{book.author_name?.join(", ")}</p>
            <button onClick={() => dispatch(removeFavorite(book))}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}
