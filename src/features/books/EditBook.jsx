import React, { useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "../../redux/reducer/bookReducer";
import { useDispatch } from "react-redux";

const EditBook = () => {
  const dispatch = useDispatch();
  let location = useLocation();
  let navigate = useNavigate();

  let [id, setId] = useState(location.state.id);
  let [name, setName] = useState(location.state.name);
  let [author, setAuthor] = useState(location.state.author);

  let handleSubmit = (e) => {
    e.preventDefault();
    let data = { id, name, author };
    dispatch(updateBook(data));
    navigate("/show-book");
  };

  return (
    <div className="container">
      <h1 className="text-center mt-3 mb-3 fw-bold">Edit Book</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Book Name</label>
          <input
            name="name"
            value={name}
            type="text"
            className="form-control"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Book Author</label>
          <input
            name="author"
            value={author}
            type="text"
            className="form-control"
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditBook;
