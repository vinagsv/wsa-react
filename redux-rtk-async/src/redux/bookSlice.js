import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (query) => {
    const res = await fetch(`https://openlibrary.org/search.json?q=${query}`);
    const data = await res.json();
    return data.docs.slice(0, 10);
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default bookSlice.reducer;
