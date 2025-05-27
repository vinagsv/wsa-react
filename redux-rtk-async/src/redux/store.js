import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";
import favoritesReducer from "./favoriteSlice";

const store = configureStore({
  reducer: {
    books: bookReducer,
    favorites: favoritesReducer,
  },
});

export default store;
