import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navber from "../layouts/Navber";
import AddBook from "./../features/books/AddBook";
import BooksView from "../features/books/BooksView";
import EditBook from "./../features/books/EditBook";

const Index = () => {
  return (
    <div>
      <BrowserRouter>
        <Navber />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/show-book" element={<BooksView />} />
          <Route path="/edit-book" element={<EditBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Index;
