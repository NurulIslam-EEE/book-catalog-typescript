import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function EditBook() {
  const { state } = useLocation();

  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    genre: "",
    publicationDate: "",
    image: "",
  });

  const [updatedData, setUpdatedData] = useState({});

  useEffect(() => {
    if (state) {
      setBookData(state);
    }
  }, [state]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updateBook = { ...bookData, [e.target.name]: e.target.value };

    const updatedValue = { ...updatedData, [e.target.name]: e.target.value };

    setBookData(updateBook);
    setUpdatedData(updatedValue);
  };

  console.log("", updatedData, bookData);
  return (
    <div className="container py-5">
      <div className="edit-book">
        <h3>Edit {bookData?.title}</h3>
        <form action="">
          <label htmlFor="">Title</label>
          <br />
          <input
            onChange={handleOnChange}
            type="text"
            name="title"
            value={bookData?.title}
          />{" "}
          <br />
          <label htmlFor="">Author</label>
          <br />
          <input
            onChange={handleOnChange}
            type="text"
            name="author"
            value={bookData?.author}
          />{" "}
          <br />
          <label htmlFor="">Genre</label>
          <br />
          <input
            onChange={handleOnChange}
            type="text"
            name="genre"
            value={bookData?.genre}
          />{" "}
          <br />
          <label htmlFor="">Publication Date</label>
          <br />
          <input
            type="text"
            name="publicationDate"
            onChange={handleOnChange}
            value={bookData?.publicationDate}
          />{" "}
          <br />
          <label htmlFor="">Image</label>
          <br />
          <input type="text" name="image" value={bookData?.image} /> <br />
          <button className="my-3" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditBook;
