import axios from "axios";
import React, { useEffect, useState, FormEvent } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useUpdateBookMutation } from "../../redux/features/books/booksApi";

function EditBook() {
  const { state } = useLocation();

  const navigate = useNavigate();

  const [bookData, setBookData] = useState({
    _id: "",
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
    } else {
      navigate("/");
    }
  }, [state, navigate]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updateBook = { ...bookData, [e.target.name]: e.target.value };

    const updatedValue = { ...updatedData, [e.target.name]: e.target.value };

    setBookData(updateBook);
    setUpdatedData(updatedValue);
  };

  const [updateBook, { error }] = useUpdateBookMutation();

  const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateBook({ id: bookData?._id, data: updatedData });

    if (error) {
      return;
    }

    toast.success("Successfully updated data");
    navigate("/");
    // try {
    //   const result = await axios.patch(
    //     `https://cooperative-jay-purse.cyclic.app/api/v1/books/update/${bookData?._id}`,
    //     updatedData
    //   );

    //   if (result?.data?.status === "success") {
    //     toast.success("Successfully updated data");
    //     navigate("/");
    //   }

    //   console.log("uuuuu", result);
    // } catch (error) {
    //   toast.error("Failed to updated");
    // }
  };

  console.log("", updatedData, bookData);
  return (
    <div className="container py-5">
      <div className="edit-book">
        <h3>Edit {bookData?.title}</h3>
        <form action="" onSubmit={handleUpdate}>
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
