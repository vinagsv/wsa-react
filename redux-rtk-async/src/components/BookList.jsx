import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite } from "../redux/favoriteSlice";

export const Booklist = () => {
  const { items, status, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>❌ Error: {error}</p>;

  return (
    <div>
      {items.map((book) => (
        <div key={book.key}>
          <h3>{book.title}</h3>
          <p>{book.author_name?.join(", ")}</p>
          <button onClick={() => dispatch(addFavorite(book))}>
            Add to Favorites
          </button>
        </div>
      ))}
    </div>
  );
};
