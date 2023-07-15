import React from "react";
import { useGetBooksQuery } from "../../redux/features/books/booksApi";
import BookCard from "../../components/common/BookCard";
import Spinner from "react-bootstrap/Spinner";

function AllBooks() {
  const { data, error, isLoading } = useGetBooksQuery(undefined);

  console.log("rtk data", data, error);

  if (isLoading) {
    return (
      <div className="container">
        <p className="d-flex justify-content-center align-items-center">
          {" "}
          <Spinner animation="border" variant="warning" />
        </p>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="all-book-container">
        {data?.data.map((da: any) => {
          return <BookCard singleBook={da} />;
        })}
      </div>
    </div>
  );
}

export default AllBooks;
