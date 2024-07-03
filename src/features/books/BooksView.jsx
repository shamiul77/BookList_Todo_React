import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "../../redux/reducer/bookReducer";

const BooksView = () => {
  const books = useSelector((state) => state.bookReducers.books);
  const dispatch = useDispatch();

  let handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="container">
      <h1 className="text-center mt-3 mb-3 fw-bold">List of books</h1>

      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Author</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books?.map((book) => {
              let { id, name, author } = book;
              return (
                <tr key={book.id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{author}</td>
                  <td>
                    <Link to="/edit-book" state={{ id, name, author }}>
                      <button className="btn btn-info">Edit</button>
                    </Link>
                    <button
                      className="btn btn-danger ms-2"
                      onClick={() => {
                        handleDelete(id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default BooksView;
