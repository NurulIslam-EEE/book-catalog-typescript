import React, { useEffect, useState } from "react";
import "./addBook.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { usePostBookMutation } from "../../redux/features/books/booksApi";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type Inputs = {
  title: string;
  author: string;
  genre: string;
  image: string;
  publicationDate: string;
};

function AddBook() {
  // const [book, setBook] = useState({
  //   title: "",
  //   image: "",
  //   author: "",
  //   genre: "",
  // });
  // const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const changedData = { ...book, [e.target.name]: e.target.value };
  //   setBook(changedData);
  //   // console.log(book);
  // };

  const { user } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.email) {
      navigate("/login");
    }
  }, []);

  const dispatch = useAppDispatch();

  const [postBook, { isError, isSuccess, data }] = usePostBookMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (book) => {
    postBook(book);

    toast.success("Successfully added book", {
      position: "top-center",
    });
    reset();
    // console.log("erorrr", isError, data);
  };
  return (
    <div className="container">
      <Toaster />
      <div className="add-book">
        <h2>Add Book</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Title</label> <br />
          <input {...register("title", { required: true })} /> <br />
          {errors.title && (
            <span className="error-text">This field is required</span>
          )}
          <br />
          <label htmlFor="">Author</label> <br />
          <input {...register("author", { required: true })} /> <br />
          {errors.author && (
            <span className="error-text">This field is required</span>
          )}
          <br />
          <label htmlFor="">Genre</label> <br />
          <input {...register("genre", { required: true })} /> <br />
          {errors.genre && (
            <span className="error-text">This field is required</span>
          )}
          <br />
          <label htmlFor="">Publication Date</label> <br />
          <input {...register("publicationDate", { required: true })} /> <br />
          {errors.publicationDate && (
            <span className="error-text">This field is required</span>
          )}
          <br />
          <label htmlFor="">Image</label> <br />
          <input {...register("image", { required: true })} /> <br />
          {errors.image && (
            <span className="error-text">This field is required</span>
          )}
          <br />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default AddBook;
