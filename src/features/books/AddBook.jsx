import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../../redux/reducer/bookReducer";

const AddBook = () => {
  let [name, setName] = useState("");
  let [author, setAuthor] = useState("");

  let dispatch = useDispatch();
  let navigat = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let book = { id: Math.random(), name, author };
    console.log(book);
    dispatch(addBook(book));
    navigat("/show-book");
  };

  return (
    <div className="container">
      <h1 className="text-center mt-3 mb-3 fw-bold">Add Book</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Enter Name</label>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="name"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Enter Author</label>
          <input
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            name="author"
            type="text"
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBook;
