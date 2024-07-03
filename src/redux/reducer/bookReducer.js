import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

export const bookReducer = createSlice({
  name: "Book",
  initialState,
  reducers: {
    addBook: (state, action) => {
      console.log(action);
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const findInd = state.books.findIndex(
        (item) => item.id === action.payload.id
      );
      state.books[findInd] = action.payload;
    },
    deleteBook: (state, action) => {
      const filteredData = state.books.filter(
        (item) => item.id !== action.payload   
      );
      state.books = filteredData;
    },
  },
});

export const { addBook, updateBook, deleteBook } = bookReducer.actions;

export default bookReducer.reducer;
