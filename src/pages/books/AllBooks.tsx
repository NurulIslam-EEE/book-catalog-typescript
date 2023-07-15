import React from "react";
import { useGetBooksQuery } from "../../redux/features/books/booksApi";
import BookCard from "../../components/common/BookCard";

function AllBooks() {
  const { data, error } = useGetBooksQuery(undefined);

  console.log("rtk data", data, error);
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
