import React from "react";

function AddBook() {
  return (
    <div className="container">
      <h2>Add Book</h2>
      <form action="">
        <label htmlFor="">Title</label> <br />
        <input type="Text" name="Title" /> <br />
        <label htmlFor="">Author</label> <br />
        <input type="text" name="Author" /> <br />
        <label htmlFor="">Genre</label> <br />
        <input type="text" name="Genre" /> <br />
      </form>
    </div>
  );
}

export default AddBook;
