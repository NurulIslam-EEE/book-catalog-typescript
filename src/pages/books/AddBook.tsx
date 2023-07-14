import React, { useState } from "react";

function AddBook() {
  const [book, setBook] = useState({
    title: "",
    image: "",
    author: "",
    genre: "",
  });
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changedData = { ...book, [e.target.name]: e.target.value };
    setBook(changedData);
    // console.log(book);
  };

  const handleSubmit = () => {};
  return (
    <div className="container">
      <h2>Add Book</h2>
      <form action="">
        <label htmlFor="">Image</label> <br />
        <input
          required
          onChange={handleOnChange}
          type="text"
          name="image"
        />{" "}
        <br />
        <label htmlFor="">Title</label> <br />
        <input
          required
          onChange={handleOnChange}
          type="Text"
          name="title"
        />{" "}
        <br />
        <label htmlFor="">Author</label> <br />
        <input
          required
          onChange={handleOnChange}
          type="text"
          name="author"
        />{" "}
        <br />
        <label htmlFor="">Genre</label> <br />
        <input
          required
          onChange={handleOnChange}
          type="text"
          name="genre"
        />{" "}
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddBook;
