import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../redux/bookSlice";

export const BookSearch = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query) dispatch(fetchBooks(query));
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Add name of the book"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
